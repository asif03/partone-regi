<?php

namespace App\Http\Controllers;

use App\Interfaces\ApplicantRepositoryInterface;
use App\Models\FcpsOnePassApplicant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FcpsOnePassApplicantController extends Controller
{
    private ApplicantRepositoryInterface $applicantRepository;

    public function __construct(ApplicantRepositoryInterface $applicantRepository)
    {
        $this->applicantRepository = $applicantRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applicants = $this->applicantRepository->getAllApplicants();

        //dd($applicants);

        return Inertia::render('Applicants/Index', [
            'applicants' => $applicants,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FcpsOnePassApplicant $fcpsOnePassApplicant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FcpsOnePassApplicant $fcpsOnePassApplicant, $id)
    {

        //$applicant = $this->applicantRepository->getApplicantById($id);

        //dd($applicant);

        /*return Inertia::render('Applicants/Edit', [
        'applicant' => $applicant,
        ]);*/

        return Inertia::render('Applicants/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FcpsOnePassApplicant $fcpsOnePassApplicant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FcpsOnePassApplicant $fcpsOnePassApplicant)
    {
        //
    }
}
