import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IApplicant, PageProps } from "@/types";

import { Head, Link } from "@inertiajs/react";
import { ChevronLeft } from "lucide-react";

export default function Edit({
    auth,
}: //applicant,
PageProps<{
    /*applicant: IApplicant*/
}>) {
    return (
        <AuthenticatedLayout>
            <Head title="Part-I Passed Applicants" />

            <div className="p-4 w-full">
                <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                    <div className="flex items-center gap-4">
                        <Link href={route("applicants.index")}>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                        </Link>
                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            Pro Controller
                        </h1>
                        <Badge variant="outline" className="ml-auto sm:ml-0">
                            Edit
                        </Badge>
                        <div className="hidden items-center gap-2 md:ml-auto md:flex">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm">Save Product</Button>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-0">
                                <CardHeader>
                                    <CardTitle>Product Details</CardTitle>
                                    <CardDescription>
                                        Lipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                defaultValue="Gamer Gear Pro Controller"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="description"
                                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                                className="min-h-32"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
