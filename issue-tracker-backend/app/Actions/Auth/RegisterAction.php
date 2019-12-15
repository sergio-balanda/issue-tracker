<?php


namespace App\Actions\Auth;

use App\Rol;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterAction
{
    public function run($request){
        $developerRol=Rol::developer()->first();
        $user = User::create([
            'name'=>$request["name"],
            'email'=>$request["email"],
            'password'=>Hash::make($request["password"])
        ]);
        $user->rols()->attach($developerRol->id);
        return $user;
    }
}
