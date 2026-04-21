<?php

use App\Http\Controllers\UserPanelController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [UserPanelController::class, 'index'])->name('home');
Route::get('/about', [UserPanelController::class, 'about'])->name('about');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
