<?php

use Illuminate\Database\Seeder;
use App\Payment;

class PaymentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $payments = factory(App\Payment::class, 20)->make();
        foreach($payments as $payment) {
            $payment->save();
        }
    }
}
