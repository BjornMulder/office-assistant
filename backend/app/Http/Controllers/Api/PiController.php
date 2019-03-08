<?php

namespace App\Http\Controllers\Api;

use App\Device;
use App\Connection;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PiController extends Controller
{
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

    public function arriving(Request $request)
    {
        $device = Device::where('mac_address', $request->get('mac_address'))->firstOrFail();

        $connection = new Connection();
        $connection->action = Connection::ACTION_CONNECTED;
        $connection->triggered_at = Carbon::now();
        $connection->created_at = Carbon::now();
        $connection->device_id = $device->id;

        $client = new Client(['base_uri' => '192.168.1.34']);

        $response = $client->request('POST', '/api/users/' . $request->get('mac_address'), [
            'json' => ['present' => 'true'],
        ]);

        return response()->json($connection->save());
    }

    public function leaving(Request $request)
    {
        $device = Device::where('mac_address', $request->get('mac_address'))->firstOrFail();

        $connection = new Connection();
        $connection->action = Connection::ACTION_DISCONNECTED;
        $connection->triggered_at = Carbon::now();
        $connection->created_at = Carbon::now();
        $connection->device_id = $device->id;

        $client = new Client(['base_uri' => '192.168.1.34']);

        $response = $client->request('POST', '/api/users/' . $request->get('mac_address'), [
            'json' => ['present' => 'false'],
        ]);

        return response()->json($connection->save());
    }
}
