<?php

namespace App;

use App\Connection;
use Illuminate\Database\Eloquent\Model;

class device extends Model
{
    protected $fillable = [
        'mac_address',
        'device_owner',
    ];

    public function connections()
    {
        return $this->hasMany(Connection::class);
    }
}
