<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
 use App\User;
 use App\Notifications\Notifications;


class EmailController extends Controller
{

    public function index() {
     
        $user_name = 'Martin';
        $user_email = 'Example@gmail.com';

        Mail::to('mail@example.com')
        ->send(new TestEmail($user_name));


   //this.props.onLoginSuccess(data.success.token);
        // notifications
        $user = User::find(2);
        $user->notify(new Notifications());
    }
  
}
