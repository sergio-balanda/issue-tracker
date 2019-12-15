<?php

use Illuminate\Http\Request;


/*Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});*/

Route::group(['middleware'=>'auth:api'],function (){
    Route::get('/me','Api\UserController@me')->name('api.me');
});

Route::post('/login','Api\AuthController@login')->name('api.login');
Route::post('/register','Api\AuthController@register')->name('api.register');
Route::post('/forgot-password','Api\ForgotPasswordController@sendResetLinkEmail')->name('api.forgot-password');
Route::post('/reset-password','Api\ResetPasswordController@reset')->name('api.reset-password');
