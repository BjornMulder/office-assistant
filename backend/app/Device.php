<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class device extends Model
{
    protected $fillable = [
        'mac_address',
        'device_owner',
    ];
}
