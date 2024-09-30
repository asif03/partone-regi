<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fcps_one_pass_applicants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reg_no');
            $table->string('applicant_name', 255);
            $table->string('father_name', 255)->nullable();
            $table->string('mother_name', 255)->nullable();
            $table->date('date_of_birth')->nullable();
            $table->date('old_date_of_birth')->nullable();
            $table->string('mailing_address', 500)->nullable();
            $table->string('present_address', 500)->nullable();
            $table->string('permanent_address', 500)->nullable();
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('created_by')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fcps_one_pass_applicants');
    }
};
