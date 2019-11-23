<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\User::class, 100)->create()->each(function ($user) {
            // Seed the relation with one address
            $address = factory(App\UserAddress::class, 100)->make();
            $user->address()->saveMany($address);
            // Seed the relation with 5 purchases
            $purchases = factory(App\UserPurchase::class, 50)->make();
            $user->purchases()->saveMany($purchases);
        });
    }
}
