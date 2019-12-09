<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login','Api\AuthController@login')->name('api.login');
Route::post('/register','Api\AuthController@register')->name('api.register');
