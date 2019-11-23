<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\UserPurchase;
use Faker\Generator as Faker;

$factory->define(UserPurchase::class, function (Faker $faker) {
    return [
        'method' => $faker->randomElement([
            UserPurchase::METHOD_CREDIT_CARD,
            UserPurchase::METHOD_PAYPAL,

        ]),
        'amount' => $faker->randomFloat(2, 10, 200),
    ];
});
