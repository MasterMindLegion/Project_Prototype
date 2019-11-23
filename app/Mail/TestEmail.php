<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $user_name;
    public $first_name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name)
    {
        $this->user_name = $name;
        $this->first_name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $name = $this->user_name;
        return $this->view('test_email', compact('name'));

    //     return $this->from('example@example.com')
    //     ->replyTo('reply@example.com', 'Reply Name')
    //     //html email
    //     ->view('emails.orders.shipped')
    //     //plain text
    //     ->text('emails.orders.shipped_plain');
    // }
}
}
