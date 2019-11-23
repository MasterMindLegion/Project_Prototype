<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPurchase extends Model
{
    const METHOD_CREDIT_CARD = 'credit_card';
    const METHOD_PAYPAL = 'paypal';

    protected $table = 'user_purchases';
    protected $fillable = ['method', 'amount'];

    public function user () {
            return $this->belongsTo(User::class);
    }
}
