<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    protected $fillable = [
        'action',
        'triggered_at',
    ];
}
