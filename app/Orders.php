<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //
    // const METHOD_CREDIT_CARD = 'credit_card';
    // const METHOD_PAYPAL = 'paypal';

    // protected $table = 'customerpurchase';
    // protected $fillable = ['method', 'amount'];

    public function customer () {
        return $this->belongsTo(User::class);
    }


    public function item()
    {
        return $this->belongsToMany(Items::class, 'item_orders','order_id', 'item_id');
    }
}
