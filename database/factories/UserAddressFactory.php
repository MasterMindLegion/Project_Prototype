<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\UserAddress;
use Faker\Generator as Faker;

$factory->define(UserAddress::class, function (Faker $faker) {
    return [
        'address1' => $faker->streetAddress,
        'address2' => $faker->streetAddress,
    ];
});
