<?php

namespace App\Http\Controllers\Api;

use App\Device;
use App\Connection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    /**
     * undocumented function
     *
     * @return void
     */
    public function getPresent()
    {
        $employeesPresent = [];
        $employees = Device::with('connections')->get();

        foreach ($employees as $employee) {
            if (!empty($employee->connections->last())) {
                if ($employee->connections->last()->action === Connection::ACTION_CONNECTED) {
                    $employeesPresent[] = $employee;
                }
            }
        }

        return $employeesPresent;
    }
}
