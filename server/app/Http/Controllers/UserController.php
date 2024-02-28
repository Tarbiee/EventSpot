<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;


class UserController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User;
        $user-> name = $req-> input('name');
        $user-> email = $req-> input('email');
        $user-> password = Hash::make($req-> input('password'));
        $user->save();
        return $user;
    }
    
    function login(Request $req)
   {
    if (!Auth::attempt($req->only('email', 'password'))) {
        return response()->json(['error' => "Invalid credentials"], 401);
    }

    // If the login attempt is successful, retrieve the authenticated user
    $user = Auth::user();
    $token= $user->createToken('token')->plainTextToken;

    $cookie = cookie('jwt', $token, 60*24);

    // Return the user data
    return response()->json([
        'message' => 'success'
    ])->withCookie($cookie);
    }

    function logout()
    {
        $cookie = Cookie::forget('jwt');
        return response ([
            'message' => 'Success'
        ])->withCookie($cookie);

    }

    function user()
    {
        return Auth::user();
    }


}
