<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $table = 'news';

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
        'featured' => 'boolean',
        'body' => 'array',
        'body_ar' => 'array',
    ];
}
