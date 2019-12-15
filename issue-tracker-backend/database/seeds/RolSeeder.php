<?php

use App\Rol;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $developerRol = Rol::insert([
            [
                "name" => "Developer",
                "slug" => "developer"],
            [
                "name" => "Admin",
                "slug" => "admin"
            ]
        ]);
    }
}
