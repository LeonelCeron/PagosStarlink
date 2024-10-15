<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiController extends Controller
{
    //Register API (POST, formData)
    public function register(Request $request){
        //Data validation
        $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed"
        ]);

        //Data Save
        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        return response()->json([
            "status" => true,
            "message" => "User created succesfully"
        ]);
    }

    //Login API (POST, formData)
    public function login(Request $request){

        //Data validation
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        //JWTAuth and Attempt
        $token = JWTAuth::attempt([
            "email" => $request->email, 
            "password" => $request->password
        ]);

        if (!empty($token)) {
            //Response
            return response()->json([
                "status" => true,
                "message" => "User Logged in Successfully",
                "token" => $token
            ]);
        }
        //Response
        return response()->json([
            "status" => false,
            "message" => "Invalid Login Details"
        ]);
    }

    //Profile API (GET)
    public function profile(){
        $userData = auth()->user();
        //Response
        return response()->json([
            "status" => true,
            "message" => "Profile Data",
            "user" => $userData
        ]); 
    }

    //Refreh Token API (GET)
    public function refreshToken(){

    }
    
    //Logout API (GET)
    public function logout(){
        
    }
}
