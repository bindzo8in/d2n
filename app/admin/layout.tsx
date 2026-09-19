import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { LogoutButton } from "@/components/admin/logout-button";

export const metadata: Metadata = {
  title: "Admin Dashboard | D2N",
  description: "D2N Admin Area",
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="min-h-screen bg-muted/40 font-sans">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">Back to Site</Button>
            </Link>
            {session && <LogoutButton />}
          </div>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:py-8">
        {children}
      </main>
    </div>
  );
}
