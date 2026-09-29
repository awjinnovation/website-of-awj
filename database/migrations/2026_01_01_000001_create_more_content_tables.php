<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The rest of the site's editable content: homepage projects and stats, the
 * about-page team, and pillar identity (names, colours, logos). Brand assets
 * and news category cover styles live in the settings table. All seeded from
 * database/content/*.json.
 */
return new class extends Migration
{
    public function up(): void
    {
        // Homepage project showcase. Deeply nested + bilingual, so stored as JSON.
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('sort')->default(0);
            $table->json('data');
            $table->timestamps();
        });

        // About-page people, grouped: management | leaders | members.
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('group');
            $table->unsignedInteger('sort')->default(0);
            $table->string('name');
            $table->string('title');
            $table->string('department')->nullable();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->string('accent_color')->nullable();
            $table->string('pillar_id')->nullable();
            $table->timestamps();

            $table->index(['group', 'sort']);
        });

        // Homepage animated counters.
        Schema::create('stats', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('sort')->default(0);
            $table->unsignedBigInteger('end');
            $table->string('suffix')->default('');
            $table->string('label_key');       // a translation key, edited under Site text
            $table->timestamps();
        });

        // Pillar identity (distinct from the pillar page bodies): name, colours,
        // tagline, description, blurb and brand asset paths.
        Schema::create('pillars', function (Blueprint $table) {
            $table->string('id')->primary();   // academy|sustain|innovation|systems
            $table->unsignedInteger('sort')->default(0);
            $table->json('data');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pillars');
        Schema::dropIfExists('stats');
        Schema::dropIfExists('team_members');
        Schema::dropIfExists('projects');
    }
};
