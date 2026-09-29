<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PillarOrg extends Model
{
    protected $primaryKey = 'pillar';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $guarded = [];

    protected $casts = [
        'clients' => 'array',
        'partners' => 'array',
    ];
}
