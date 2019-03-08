<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    const ACTION_CONNECTED = 'connected';
    const ACTION_DISCONNECTED = 'disconnected';

    protected $fillable = [
        'action',
        'triggered_at',
    ];
}
