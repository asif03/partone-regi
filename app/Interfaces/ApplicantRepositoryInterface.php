<?php

namespace App\Interfaces;

interface ApplicantRepositoryInterface
{
    public function getAllApplicants();
    public function getApplicantById($id);
}
