<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Item;
use App\User;

class ItemController extends Controller
{
    public function createItem(Request $request, User $User) {
        $item = Item::create([
            'item_name' => $request->item_name,
            'price_per_item' => $request->price_per_item,
            'description' => $request->description,
            'in_stock' => $request->in_stock,
            'charity_id' => $request->user()->charity->id]);
    }


    public function index() {
        $all_items = Item::get();
        return $all_items;
    }
    public function create() {
        $single_items = Item::limit(1)->get();
        return $single_items;
    }
    public function paginateItems() {
        $paginate_items = Item::paginate(3);
        return $paginate_items;
    }
}