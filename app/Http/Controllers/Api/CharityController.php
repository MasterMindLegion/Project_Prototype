<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use App\Role;
use App\Charity;


class CharityController extends Controller
{
    public $successStatus = 200;

    //Protected route with react router? or auth here in laravel?
    // What is the second parametr? USER   

    public function registerCharity(Request $request, User $User) {

    if($request->user()->charity != null){
      //CHANGE CHARITY INFORMATION
      $charity = $request->user()->charity;
      $charity->name = $request->name;
      $charity->char_address = $request->char_address;
      $charity->char_information = $request->char_information;
      $charity->save();
          
    }else {
      //CREATE CHARITY 
        $charity = Charity::create([
            'user_id' => $request->user()->id,
            'Name' => $request->name,
            'Char_address' => $request->char_address,
            'Char_information' => $request->char_information,   
          ]);
          $user =  $request->user();
          $user->role_id = 1;
          $user->save();   
          return response()->json([
            'success' => true, 
            'name' => $request->name,
            'message' => 'You have opened a charity',
            'status' => 'success',
            'user_id' => $request->user()->id,             
        ], $this->successStatus);    
    }
  }
    //POST
    public function canCreateCharity(Request $request) {
      $users = User::get();
      return response()->json([
        'status' => $request->user()->charity == null,
        'message_charity' =>$request->user()->charity,
        'message_user' =>$request->user(),
      ]); 
    }
   // PUT
    public function changeInformationCharity(Request $request) {
      $charity = $request->user()->charity;
      $charity->name = $request->input('name');
      $charity->char_address = $request->input('adress');
      $charity->char_information = $request->input('info');
      $charity->save();
    }
    //GET
   public function getUserCharity(Request $request, $id) {
    return Charity::find($id);
   }
   //GET
    public function index() {
      $all_charities = Charity::get();
      return $all_charities;
    }

    
    
}

