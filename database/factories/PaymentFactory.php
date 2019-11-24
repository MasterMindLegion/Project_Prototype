<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Payment;
use Faker\Generator as Faker;

$factory->define(Payment::class, function (Faker $faker) {
    return [

        'amount' => $faker->randomFloat(2, 10, 200),
        'payment_date'=>$faker->creditCardExpirationDate,
        'method'=>$faker->creditCardType,
        'CC_Number'=>$faker->creditCardNumber,
        'CC_Holders_name'=> $faker->name,
        'CC_Exp_date'=>$faker->creditCardExpirationDate,
        'CC_Auth_Number' => $faker->swiftBicNumber,

        // 'description'=>$faker->text(rand(20,200)),
        // 'in_stock'=>$faker->numberBetween($min = 10, $max = 50),

    ];
});
