<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

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
        $user = User::where('email', $req->input('email'))->first();
        if (!$user) {
        return response()->json(['error' => "User not found"], 404);
    }
    // Check if the password matches
    if (!Hash::check($req->input('password'), $user->password)) {
        return response()->json(['error' => "Email or password is not matched"], 401);
    }
    // If both email and password are correct, return user data
    return $user;
    }

}
