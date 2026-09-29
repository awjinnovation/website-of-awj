<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $guarded = ['id'];

    /** Derive the group (text before the first dot) from the key. */
    public static function groupFor(string $key): string
    {
        return str_contains($key, '.') ? strtok($key, '.') : 'misc';
    }
}
