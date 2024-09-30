<?php

namespace App\Repositories;

use App\Interfaces\ApplicantRepositoryInterface;
use App\Models\FcpsOnePassApplicant;

class ApplicantRepository implements ApplicantRepositoryInterface
{
    public function getAllApplicants()
    {
        $applicants = array();
        $applicantList = FcpsOnePassApplicant::select('id', 'reg_no', 'applicant_name', 'father_name', 'mother_name',
            'date_of_birth', 'old_date_of_birth', 'mailing_address', 'present_address', 'permanent_address', 'status')
            ->get();

        foreach ($applicantList as $appl) {
            $applicant['dbId'] = $appl->id;
            //$applicant['department'] = $prog['department']->dept_name;
            $applicant['regNo'] = $appl->reg_no;
            $applicant['applicantName'] = $appl->applicant_name;
            $applicant['fatherName'] = $appl->father_name;
            $applicant['motherName'] = $appl->mother_name;
            $applicant['dob'] = $appl->date_of_birth;
            $applicant['oldDob'] = $appl->old_date_of_birth;
            $applicant['mailingAddress'] = $appl->mailing_address;
            $applicant['presentAddress'] = $appl->present_address;
            $applicant['permanentAddress'] = $appl->permanent_address;
            $applicant['status'] = $appl->status ? 'Active' : 'Inactive';

            $applicants[] = $applicant;
        }

        return $applicants;

    }

    public function getApplicantById($id)
    {

    }
}
