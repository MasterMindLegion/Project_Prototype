<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\SubCategory;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
    // {
        // $categories = ['Home & Garden', 'Electronics', 'Fashion','Sports & Leisure','Heatlh & Beauty','Entertainment' , 'Collectables'];
        // foreach ($categories as $category)
	    // Category::create(['title' => $category]);


    $data = [
        'Home & Garden' => ['Garden', 'Furniture', 'DIY Tools', 'Pet Supplies', 'Home Bedding'    ],
        'Electronics' => ['Computers', 'Tablets', 'Mobile Phones', 'Cameras & Photography', 'Home Appliances'],
        'Fashion' => ['Men','Women','Kids','Brands'],
        'Sports & Leisure' => ['Sporting Goods', 'Fitness'],
        'Health & Beauty' => ['Body Products', 'Facial Skin Care', 'Healthcare Products','Fragrances '],
        'Entertainment' => ['Books & Magazines', 'DVDs & Films','Music' ],
        'Collectables' => ['Antiques & Art', 'Toys & Games', 'Music', 'Art'],
    ];

    foreach ($data as $category => $subCategories)
    {
        $id = Category::create(['title' => $category])->id;

        foreach ($subCategories as $subCategory) {

            SubCategory::create([
                'category_id' => $id,
                'sub_title' => $subCategory
            ]);
        }
    }
}
}
