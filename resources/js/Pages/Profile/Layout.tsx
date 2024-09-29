import { Separator } from "@/Components/ui/separator";
import { PropsWithChildren, ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/examples/forms",
    },
    {
        title: "Account",
        href: "/examples/forms/account",
    },
    {
        title: "Appearance",
        href: "/examples/forms/appearance",
    },
    {
        title: "Notifications",
        href: "/examples/forms/notifications",
    },
    {
        title: "Display",
        href: "/examples/forms/display",
    },
];

export default function ProfileLayout({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <div className="lg:py-0 py-4 px-6 pb-6">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Settings
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
                    <aside className="-mx-4 lg:w-2/12">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </Authenticated>
    );
}
