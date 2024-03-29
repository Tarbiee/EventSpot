<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('add_event',[EventController::class,'addEvent']);
Route::delete('delete/{id}',[EventController::class,'delete']);
Route::get('event/{id}',[EventController::class,'getEvent']);
Route::put('update/{id}',[EventController::class,'updateEvent']);
Route::post('events/{id}/reserve',[ReservationController::class,'reserveTickets']);
Route::get('events',[EventController::class,'events']);

Route::middleware('auth:sanctum')->group(function(){
   
    Route::get('user',[UserController::class,'user']);
    Route::post('logout',[UserController::class,'logout']);
});
