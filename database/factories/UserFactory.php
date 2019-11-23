<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Faker\Generator as Faker;

use Illuminate\Support\Str;
use App\UserAddress;
use App\UserPurchase;
// fake = Faker('it_IT')
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

// $factory->define(Model::class, function (Faker $faker) {
//     return [
//         //
//     ];
// });


$factory->define(UserAddress::class, function (Faker $faker) {
    return [
        'address1' => $faker->streetAddress,
        'address2' => $faker->streetAddress,
        'user_id'=>$faker->randomDigit,
    ];
});

$factory->define(UserPurchase::class, function (Faker $faker) {
    return [
        'method' => $faker->randomElement([
            UserPurchase::METHOD_CREDIT_CARD,
            UserPurchase::METHOD_PAYPAL,
        ]),
        'amount' => $faker->randomFloat(2, 10, 200),
        'user_id'=>$faker->randomDigit,
    ];
});
