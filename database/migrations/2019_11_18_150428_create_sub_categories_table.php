<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_categories', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('sub_title');

            $table->timestamps();

            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');

            // $table->unsignedBigInteger('payment_method_id');
            // $table->foreign('payment_method_id')->references('id')->on('payments');



        });

        // Schema::table('items', function (Blueprint $table) {
        //     $table->unsignedBigInteger('subcategory_id')
        //         ->nullable()
        //         ->index()
        //         ->after('item_img');


        // });

        // Schema::table('sub_categories', function (Blueprint $table) {

        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_categories');
    }
}
