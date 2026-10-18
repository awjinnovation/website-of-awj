<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Uploaded images. The media team uploads here from any admin form; files land
 * in public/uploads and are referenced by their root-relative path, exactly
 * like the hand-placed assets under public/. The Media Library lists these so
 * uploads can be reviewed and reused.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('path');              // e.g. /uploads/2026/10/name-ab12cd.jpg
            $table->string('original_name')->nullable();
            $table->string('mime')->nullable();
            $table->unsignedBigInteger('size')->default(0);
            $table->string('folder')->nullable()->index();   // which section it was uploaded for
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
