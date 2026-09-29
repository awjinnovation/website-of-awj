<?php

namespace Tests\Feature;

use App\Models\News;
use App\Models\Translation;
use App\Models\User;
use Database\Seeders\ContentSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
        $this->seed(ContentSeeder::class);
    }

    private function admin(): User
    {
        return User::factory()->create(['is_admin' => true]);
    }

    private function editor(): User
    {
        return User::factory()->create(['is_admin' => false]);
    }

    public function test_the_admin_requires_authentication(): void
    {
        $this->get('/admin')->assertRedirect(route('login'));
    }

    public function test_a_non_admin_cannot_reach_the_admin(): void
    {
        $this->actingAs($this->editor())->get('/admin')->assertForbidden();
    }

    public function test_a_non_admin_is_rejected_at_login(): void
    {
        $editor = $this->editor();

        $this->post('/login', ['email' => $editor->email, 'password' => 'password'])
            ->assertSessionHasErrors('email');

        $this->assertGuest();
    }

    public function test_an_admin_can_sign_in_and_see_the_dashboard(): void
    {
        $admin = $this->admin();

        $this->post('/login', ['email' => $admin->email, 'password' => 'password'])
            ->assertRedirect(route('admin.dashboard'));

        $this->actingAs($admin)->get('/admin')->assertOk()->assertSee('News articles');
    }

    public function test_creating_an_article_shows_it_on_the_public_site(): void
    {
        $this->actingAs($this->admin())->post(route('admin.news.store'), [
            'title' => 'A brand new milestone',
            'dek' => 'Something happened.',
            'body' => ['First paragraph.', '', '  ', 'Second paragraph.'],
            'category' => 'Digital Economy',
            'pillar' => 'AWJ Systems',
            'date' => '2026-10-01',
            'featured' => '1',
        ])->assertRedirect(route('admin.news.index'));

        $news = News::where('slug', 'a-brand-new-milestone')->firstOrFail();
        $this->assertSame(['First paragraph.', 'Second paragraph.'], $news->body); // blanks dropped
        $this->assertTrue($news->featured);

        // The public payload rebuilds and includes it.
        $this->get('/')->assertSee('A brand new milestone');
    }

    public function test_editing_an_article_keeps_its_slug_when_the_field_is_blank(): void
    {
        $news = News::firstOrFail();
        $originalSlug = $news->slug;

        $this->actingAs($this->admin())->put(route('admin.news.update', $news), [
            'title' => 'A completely different title',
            'dek' => $news->dek,
            'body' => $news->body,
            'category' => $news->category,
            'pillar' => $news->pillar,
            'date' => $news->date->format('Y-m-d'),
        ])->assertRedirect();

        $this->assertSame($originalSlug, $news->refresh()->slug);
    }

    public function test_deleting_an_article_removes_it_from_the_site(): void
    {
        $news = News::firstOrFail();

        $this->actingAs($this->admin())->delete(route('admin.news.destroy', $news))->assertRedirect();

        $this->assertDatabaseMissing('news', ['id' => $news->id]);
        $this->get('/')->assertDontSee($news->title);
    }

    public function test_editing_site_text_updates_the_public_payload(): void
    {
        $translation = Translation::where('key', 'nav.about')->firstOrFail();

        $this->actingAs($this->admin())->put(route('admin.translations.update'), [
            't' => [$translation->id => ['en' => 'About Us', 'ar' => 'من نحن']],
        ])->assertRedirect();

        $this->assertSame('About Us', $translation->refresh()->en);
        $this->get('/')->assertSee('"nav.about":"About Us"', false);
    }

    public function test_the_pillar_editor_rejects_a_malformed_payload(): void
    {
        $this->actingAs($this->admin())
            ->put(route('admin.pillars.update', 'innovation'), ['content' => 'not json'])
            ->assertSessionHasErrors('content');
    }

    public function test_creating_a_project_shows_it_on_the_home_page(): void
    {
        $this->actingAs($this->admin())->post(route('admin.projects.store'), [
            'data' => json_encode(['name' => 'Falaj Revival', 'pillar' => 'Sustain', 'summary' => 's', 'impact' => 'i']),
        ])->assertRedirect(route('admin.projects.index'));

        $this->get('/')->assertSee('Falaj Revival');
    }

    public function test_a_project_needs_a_name(): void
    {
        $this->actingAs($this->admin())
            ->post(route('admin.projects.store'), ['data' => json_encode(['name' => '  '])])
            ->assertSessionHasErrors('data');
    }

    public function test_adding_a_team_member_shows_them_on_the_about_page(): void
    {
        $this->actingAs($this->admin())->post(route('admin.team.store'), [
            'group' => 'members',
            'name' => 'Sara Al Rawahi',
            'title' => 'Designer',
        ])->assertRedirect(route('admin.team.index'));

        $this->get('/about')->assertSee('Sara Al Rawahi');
    }

    public function test_saving_stats_replaces_them_and_updates_the_site(): void
    {
        $this->actingAs($this->admin())->put(route('admin.stats.update'), [
            'rows' => [['end' => 123, 'suffix' => '+', 'label_key' => 'stats.projects.label']],
        ])->assertRedirect();

        $this->assertSame(1, \App\Models\Stat::count());
        $this->get('/')->assertSee('"end":123', false);
    }

    public function test_editing_pillar_identity_updates_the_site(): void
    {
        $content = \App\Models\PillarContent::find('innovation')->content;

        $this->actingAs($this->admin())->put(route('admin.pillars.update', 'innovation'), [
            'content' => json_encode($content),
            'identity' => ['name' => 'Innovate', 'accent' => 'var(--innovation)'],
        ])->assertRedirect();

        $this->get('/')->assertSee('"name":"Innovate"', false);
    }

    public function test_settings_save_brand_and_category_styles(): void
    {
        $this->actingAs($this->admin())->put(route('admin.settings.update'), [
            'address_en' => 'Muscat',
            'address_ar' => 'مسقط',
            'brand' => ['logo' => '/assets/brand/awj-logo.svg'],
            'category_styles' => ['Healthcare' => ['ink' => '#123456', 'a' => '#123456', 'b' => '#222', 'accent' => '#eee']],
        ])->assertRedirect();

        $this->get('/')->assertSee('#123456', false);
    }
}
