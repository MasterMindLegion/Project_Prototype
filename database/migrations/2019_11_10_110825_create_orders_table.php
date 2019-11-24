<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->dateTime('order_date')->nullable();
            $table->boolean('confirmed');
            $table->decimal('quantity', 8, 2)->nullable();
            $table->float('price_per_item', 8, 2)->nullable();
            $table->timestamps();
        });

        // still missing from table though, added with VOyager
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('item_id');

            $table->foreign('item_id')->references('id')->on('items');
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')->references('id')->on('users');
        });

        // Schema::table('orders', function (Blueprint $table) {
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
        Schema::dropIfExists('orders');
    }
}
