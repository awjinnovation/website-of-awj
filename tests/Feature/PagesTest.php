<?php

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class PagesTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        // The page is the same Blade shell every time; no built assets needed.
        $this->withoutVite();
    }

    public static function knownPaths(): array
    {
        return [
            'home' => ['/'],
            'about' => ['/about'],
            'news' => ['/news'],
            'academy' => ['/pillars/academy'],
            'sustain' => ['/pillars/sustain'],
            'innovation' => ['/pillars/innovation'],
            'systems' => ['/pillars/systems'],
        ];
    }

    #[DataProvider('knownPaths')]
    public function test_known_pages_serve_the_react_app(string $path): void
    {
        $this->get($path)
            ->assertOk()
            ->assertSee('<div id="root"></div>', false)
            ->assertSee('<meta name="csrf-token"', false);
    }

    public static function unknownPaths(): array
    {
        return [
            'unknown page' => ['/does-not-exist'],
            'unknown pillar' => ['/pillars/nope'],
            'old contact script' => ['/send.php'],
        ];
    }

    #[DataProvider('unknownPaths')]
    public function test_unknown_pages_serve_the_react_app_with_a_404(string $path): void
    {
        $this->get($path)
            ->assertNotFound()
            ->assertSee('<div id="root"></div>', false);
    }
}
