<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Charity extends Model
{
    protected $fillable = [
        'customer_id', 'charity_id', 'user_id', 'Name', 'Char_address', 'Char_information'
    ];
    // protected $fillable = ['Name', 'Char_address', 'Char_information', 'user_id'];

    public function user () {
        return $this->belongsTo(User::class);
    }

    public function item()
    {
        return $this->hasMany(Items::class);
    }
}
