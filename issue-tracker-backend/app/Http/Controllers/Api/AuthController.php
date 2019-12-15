<?php

namespace App\Http\Controllers\Api;

use App\Actions\Auth\LoginAction;
use App\Actions\Auth\RegisterAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(UserLoginRequest $request, LoginAction $loginAction){
        //inject actions

        $passportRequest =  $loginAction->run($request->all());
        $tokenContent = $passportRequest["content"];

        if(!empty($tokenContent['access_token'])){
            return $passportRequest["response"];
        }
        return response()->json([
           'message'=>'No tienes permisos'
        ]);
    }

    public  function register(UserRegisterRequest $request, RegisterAction $registerAction){
        $user = $registerAction->run($request->all());

        if (!$user){
            return response()->json([
                "success"=>false,
                "message"=>"El registro fallo"
            ],500);
        }

        return response()->json([
            "success"=>true,
            "message"=>"Usuario registrado con exito"
        ]);
    }
}
