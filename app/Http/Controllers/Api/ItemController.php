<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller
{
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
