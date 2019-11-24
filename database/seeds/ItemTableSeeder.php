<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('items')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $items = factory(App\Item::class, 100)->make();
        //dd($items[0]);
        foreach($items as $item) {
            $item->save();
        }

    }
}


