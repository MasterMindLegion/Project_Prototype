<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Was deleted because of react view
// Auth:routes()

// HomePage view
Route::get('/', function () {
    return view('welcome');
});

// React View
 Route::get('/app/{anything?}', function () {
     return view('welcome');
 })->where('anything', '.*');

// Email Send
Route::get('/email', 'EmailController@index');

// Admin Path
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
