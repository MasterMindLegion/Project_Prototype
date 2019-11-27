<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Hash; 
use Validator;
use App\Role;
class UserController extends Controller
{

    public $successStatus = 200;
   
    /** 
         * login api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function login(Request $request){ 
            
            // add credentials? link:https://blog.pusher.com/build-rest-api-laravel-api-resources/

            if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
                $user = Auth::user(); 
                $success['token'] =  $user->createToken('MyApp')-> accessToken;
                $role_id = $user->role_id == null ? 2 : $user->role_id;
                //  $hasCharity = $user->charity != null;
                // dd($hasCharity);
                return response()->json([
                    'success' => $success, 
                    'TEST_USER' =>  $request->user(),
                    'token_type' => "Bearer",
                    'message' => 'You are authorized to access',
                    'status' => 'success',
                    'role_id' => $role_id ,            
                ], $this-> successStatus); 
            } 
            else{ 
                return response()->json([
                    'error'=>'Unauthorized',
                    'message' => 'Please enter correct email and password',
                ], 401); 
            } 
        }
    /** 
         * Register api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function register(Request $request) 
        { 
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'email' => 'required|email', 
                'password' => 'required', 
                'c_password' => 'required|same:password', 
            ]);

             if ($validator->fails()) { 
                return response()->json([
                    'error'=>$validator->errors(),
                    'message'=> 'Please make this register right'
                ], 401);            
            }
            
            $input = $request->all(); 
            $input['password'] = bcrypt($input['password']); 
            $user = User::create($input); 
            // createToken('MyApp') ---- what is argument?
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;
            
             return response()->json([
            'success'=>$success,
            'message'=> 'You are registered'
        ], $this-> successStatus); 
        }
    /** 
         * details api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function details() 
        { 
            $user = Auth::user(); 
            return response()->json(['success' => $user], $this-> successStatus); 
        } 

        public function changeEmailInformationUser(Request $request) {
            $user = Auth::user(); 
            if(Hash::check($request->input('confirm_password'), $user->password)) {
                $user->email =$request->input('email');
              //  $user->password = bcrypt($request->input('confirm_password')); 
                $user->save();

                return [
                    "success" => true
                ];
            }
            return [
                "success" => false
            ];
    } 


    public function changePasswordInformationUser(Request $request) {
        $user = Auth::user(); 
        if(Hash::check($request->input('old_password'), $user->password) && $request->input('new_password') == $request->input('confirm_new_password')) {
            $user->password = bcrypt($request->input('new_password'));
          //  $user->password = bcrypt($request->input('confirm_password')); 
            $user->save();

            return [
                "success" => true
            ];
        }
        return [
            "success" => false
        ];
} 





        }

        

