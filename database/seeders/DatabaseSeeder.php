<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // The first admin. Change the password after the first login.
        User::updateOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@awj.om')],
            [
                'name' => env('ADMIN_NAME', 'AWJ Admin'),
                'password' => Hash::make(env('ADMIN_PASSWORD', 'change-me-please')),
                'is_admin' => true,
            ],
        );

        $this->call(ContentSeeder::class);
    }
}
