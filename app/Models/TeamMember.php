<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    public const GROUPS = ['management' => 'Management', 'leaders' => 'Business unit leaders', 'members' => 'Team'];

    protected $guarded = ['id'];
}
