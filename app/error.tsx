"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="w-full min-h-[70vh] pt-32 pb-24 flex flex-col items-center justify-center bg-background px-6">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-6 p-8 bg-card border border-border rounded-3xl shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-destructive/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center relative z-10">
          <AlertTriangle size={32} />
        </div>
        
        <div className="flex flex-col gap-2 relative z-10">
          <h2 className="text-2xl font-bold font-heading">Something went wrong!</h2>
          <p className="text-muted-foreground">
            We&apos;re sorry, but an unexpected error occurred while loading this page.
          </p>
        </div>
        
        <div className="flex gap-4 w-full mt-4 relative z-10">
          <Button 
            onClick={() => reset()} 
            variant="default"
            className="flex-1 gap-2"
          >
            <RefreshCcw size={16} />
            Try again
          </Button>
          <Link 
            href="/"
            className={buttonVariants({ variant: "outline", className: "flex-1" })}
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
