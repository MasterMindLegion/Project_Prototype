<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('item_name', 200)->nullable();
            $table->string('item_img')->nullable();
            $table->float('price_per_item', 8, 2)->nullable();
            $table->longText('description')->nullable();
            $table->decimal('in_stock', 8, 2)->nullable();

            // $table->unsignedBigInteger('charity_id');
            // $table->foreign('charity_id')->references('id')->on('charities');

            $table->timestamps();

            // $table->unsignedBigInteger('subcategory_id');
            // $table->foreign('subcategory_id')->references('id')->on('sub_categories');
        });



        // Schema::table('items', function (Blueprint $table) {
        //     $table->unsignedBigInteger('charity_id');

        //     $table->foreign('charity_id')->references('id')->on('charities');
        // });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
