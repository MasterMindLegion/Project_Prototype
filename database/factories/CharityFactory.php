<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Charity;
use Faker\Generator as Faker;

$factory->define(Charity::class, function (Faker $faker) {
    return [
        'Name' => $faker->company,
        'Char_address' => $faker->streetAddress,
        'Char_information' =>$faker->text(rand(10,50)),
        // 'user_id'=>$faker->randomDigit,
    ];
});
