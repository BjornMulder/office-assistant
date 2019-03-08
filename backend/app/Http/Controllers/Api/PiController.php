<?php

namespace App\Http\Controllers\Api;

use App\Device;
use App\Connection;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PiController extends Controller
{
    const ACTION_CONNECTED = 'connected';
    const ACTION_DISCONNECTED = 'disconnected';
    /**
     * Receives mac address and user name to register new device
     *
     * @return void
     */
    public function register(Request $request)
    {
        $device = new Device($request->all());
        $device->save();

        return response()->json('created');
    }

    /**
     *
     *
     * @return void
     */
    public function arriving(Request $request)
    {
        // get mac address from request
        $device = Device::where('mac_address', 'test_mac')->firstOrFail();

        // determine action type
        $connection = new Connection();
        $connection->action = self::ACTION_CONNECTED;
        $connection->triggered_at = Carbon::now();
        $connection->created_at = Carbon::now();
        $connection->device_id = $device->id;
        return $connection->save();
    }

}
