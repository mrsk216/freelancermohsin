<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserPanelController extends Controller
{
    public function index()
    {
        return Inertia::render('home');
    }
}
