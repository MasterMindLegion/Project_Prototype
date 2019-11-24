<?php

use App\Charity;
use Illuminate\Database\Seeder;

class CharityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $charities = factory(App\Charity::class, 20)->make();
        foreach($charities as $charity) {
            $charity->save();
        }

        // DB::table('charities')->truncate();    // people
        // $arr = [
        // "GingerBread",
        // "Macmillan Cancer Suppoert",
        // "Anti-SLavery",
        // "PregnancySicknessSupport",
        // "NSPCC",
        // "Tommyes",
        // "DrugAddictSupport",
        // "Get Drug Free",
        // "FareShare",
        // "Grillling",
        // "Phoenix",
        // "YMACA",
        // "MicrosoftFoundation",
        // "AppleFoundation",
        // "Young Epilepsy",
        // "Refuge",
        // "Cancer Research UK",
        // "Teenage Cancer Trust",
        // "Alzheimers Society"
        // ];

        // foreach ($arr as $key => $value) {
        //     Charity::create([
        //         "Name" => $value
        //         ]);
        // };
    }
}
