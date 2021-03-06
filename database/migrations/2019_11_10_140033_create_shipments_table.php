<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('shipment_type', 100)->nullable();
            $table->char('item_name', 200)->nullable();
            $table->longText('shipping_address')->nullable();
            $table->longText('billing__address')->nullable();
            $table->float('price_per_item', 8, 2)->nullable();
            $table->float('delivery_cost', 8, 2)->nullable();
            $table->double('final_price', 8, 2)->nullable();








            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipments');
    }
}
