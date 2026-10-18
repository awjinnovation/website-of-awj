<?php

namespace Tests\Feature;

use App\Models\Media;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class MediaTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }

    private function admin(): User
    {
        return User::factory()->create(['is_admin' => true]);
    }

    public function test_the_media_library_requires_an_admin(): void
    {
        $this->get('/admin/media')->assertRedirect(route('login'));
        $this->actingAs(User::factory()->create(['is_admin' => false]))
            ->get('/admin/media')->assertForbidden();
    }

    public function test_an_admin_can_upload_an_image_and_it_is_stored_and_served(): void
    {
        $res = $this->actingAs($this->admin())->post('/admin/media', [
            'file' => UploadedFile::fake()->image('team-photo.jpg', 400, 300),
            'folder' => 'team',
        ]);

        $res->assertOk()->assertJsonStructure(['id', 'url', 'name', 'size']);
        $url = $res->json('url');

        $this->assertStringStartsWith('/uploads/', $url);
        $this->assertDatabaseHas('media', ['path' => $url, 'folder' => 'team']);

        $full = public_path(ltrim($url, '/'));
        $this->assertFileExists($full);

        // clean up the file written during the test
        @unlink($full);
    }

    public function test_upload_rejects_non_images(): void
    {
        $this->actingAs($this->admin())->post('/admin/media', [
            'file' => UploadedFile::fake()->create('notes.pdf', 100, 'application/pdf'),
        ])->assertSessionHasErrors('file');

        $this->assertSame(0, Media::count());
    }

    public function test_the_picker_list_returns_uploads_as_json(): void
    {
        Media::create(['path' => '/uploads/x.png', 'original_name' => 'x.png', 'folder' => 'news']);

        $this->actingAs($this->admin())->getJson('/admin/media/list')
            ->assertOk()
            ->assertJsonFragment(['url' => '/uploads/x.png', 'folder' => 'news']);
    }

    public function test_deleting_media_removes_the_row(): void
    {
        $media = Media::create(['path' => '/uploads/gone.png', 'original_name' => 'gone.png']);

        $this->actingAs($this->admin())->delete("/admin/media/{$media->id}")->assertRedirect();
        $this->assertDatabaseMissing('media', ['id' => $media->id]);
    }
}
