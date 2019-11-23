<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->decimal('amount', 8, 2);
            $table->date('payment_date')->nullable();
            $table->enum('method', ['credit_card', 'paypal']);

            $table->bigInteger('CC_Number');
            $table->char('CC_Holders_name', 200);
            $table->date('CC_Exp_date');
            $table->bigInteger('CC_Auth_number');
           
            $table->integer('customer_id')->unsigned();
            $table->timestamps();

            // use unsignedBigInteger for foreing keys
            $table->unsignedBigInteger('payment_method_id');
            $table->foreign('payment_method_id')->references('id')->on('payments');



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
