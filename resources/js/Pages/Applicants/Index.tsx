import { columns } from "@/Components/datatables/applicants/columns";
import { DataTable } from "@/Components/datatables/applicants/data-table";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Separator } from "@/Components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IApplicant, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { File, ListFilter, PlusCircle } from "lucide-react";

export default function Index({
    auth,
    applicants,
}: PageProps<{ applicants: IApplicant[] }>) {
    return (
        <AuthenticatedLayout>
            <Head title="Part-I Passed Applicants" />

            <div className="lg:py-0 py-4 px-6 pb-6">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        FCPS Part-I Passed Applicants
                    </h2>
                    <p className="text-muted-foreground">
                        Manage FCPS Part-I passed applicants information.
                    </p>
                </div>
                <Separator className="my-4" />
                <Tabs defaultValue="all">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger
                                value="archived"
                                className="hidden sm:flex"
                            >
                                Archived
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 gap-1"
                                    >
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Filter
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        Filter by
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>
                                        Active
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Draft
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Archived
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-8 gap-1"
                            >
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Export
                                </span>
                            </Button>
                            <Button size="sm" className="h-8 gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Add Applicant
                                </span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="all">
                        <Card>
                            <CardContent className="pt-4 px-2">
                                <DataTable
                                    data={applicants}
                                    columns={columns}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="active">
                        <Card x-chunk="dashboard-06-chunk-0">
                            <CardHeader>
                                <CardTitle>Products</CardTitle>
                                <CardDescription>
                                    Active Products
                                </CardDescription>
                            </CardHeader>
                            <CardContent>Asif</CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AuthenticatedLayout>
    );
}
