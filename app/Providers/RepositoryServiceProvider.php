<?php

namespace App\Providers;

use App\Interfaces\ApplicantRepositoryInterface;
use App\Interfaces\CompanyRepositoryInterface;
use App\Repositories\ApplicantRepository;
use App\Repositories\CompanyRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(CompanyRepositoryInterface::class, CompanyRepository::class);
        $this->app->bind(ApplicantRepositoryInterface::class, ApplicantRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
