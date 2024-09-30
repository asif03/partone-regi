import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const applicantSchema = z.object({
    id: z.bigint(),
    regNo: z.bigint(),
    applicantName: z.string(),
    fatherName: z.string(),
    motherName: z.string(),
    dob: z.string().date(),
    oldDob: z.string(),
    mailingAddress: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    status: z.string(),
});

export type Applicant = z.infer<typeof applicantSchema>;
