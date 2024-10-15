<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

    }

    //Refreh Token API (GET)
    public function refreshToken(){

    }
    
    //Logout API (GET)
    public function logout(){
        
    }
}
