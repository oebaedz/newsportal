<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 10; $i++){
            DB::table('news')->insert([
                'title' => fake() -> word(4, true),
                'description' => fake() -> paragraph(2, true),
                'category' => fake() -> sentence(),
                'author' => fake() -> email(),
            ]);
    }
    }
}
