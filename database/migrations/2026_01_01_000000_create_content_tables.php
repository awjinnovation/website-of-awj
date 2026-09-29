<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The website's editable content. Everything here is seeded from the JSON in
 * database/content/ (exported from the original hard-coded React modules) and
 * then managed through the admin panel. The React app reads it as a single
 * injected payload, so these columns mirror the shapes the frontend expects.
 */
return new class extends Migration
{
    public function up(): void
    {
        // News articles. Bilingual; body columns hold an array of paragraphs.
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();          // the React `id`
            $table->string('category');
            $table->string('pillar');                  // display label, e.g. "AWJ Sustain"
            $table->date('date');
            $table->boolean('featured')->default(false);
            $table->string('image')->nullable();

            $table->string('title');
            $table->text('dek');
            $table->json('body');                      // string[]

            $table->string('title_ar')->nullable();
            $table->text('dek_ar')->nullable();
            $table->json('body_ar')->nullable();       // string[] | null

            $table->timestamps();

            $table->index('date');
        });

        // Site text: one row per translation key, English + Arabic.
        Schema::create('translations', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('group')->index();          // prefix before the first dot
            $table->text('en')->nullable();
            $table->text('ar')->nullable();
            $table->timestamps();
        });

        // Pillar page bodies: the full { en, ar } PillarContentBundle as JSON,
        // one row per pillar. Structural brand data (colours, logos) stays in code.
        Schema::create('pillar_contents', function (Blueprint $table) {
            $table->string('pillar')->primary();       // academy|sustain|innovation|systems
            $table->json('content');                   // { en: {...}, ar: {...} }
            $table->timestamps();
        });

        // Client / partner logo walls, one row per pillar.
        Schema::create('pillar_orgs', function (Blueprint $table) {
            $table->string('pillar')->primary();
            $table->json('clients')->nullable();       // { name, src }[]
            $table->json('partners')->nullable();      // { name, src }[]
            $table->timestamps();
        });

        // Loose key/value site settings (company address, etc.).
        Schema::create('settings', function (Blueprint $table) {
            $table->string('key')->primary();
            $table->json('value');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');
        Schema::dropIfExists('pillar_orgs');
        Schema::dropIfExists('pillar_contents');
        Schema::dropIfExists('translations');
        Schema::dropIfExists('news');
    }
};
