"use client";

import { Inter, Nunito } from "next/font/google";
import { AlertTriangle, RefreshCcw } from "lucide-react";

// In global-error, we must include html and body tags
const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const nunito = Nunito({subsets:['latin'],variable:'--font-heading'});

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <main className="w-full min-h-screen flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full flex flex-col items-center text-center gap-6 p-8 bg-card border border-border rounded-3xl shadow-lg relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center relative z-10">
              <AlertTriangle size={32} />
            </div>
            
            <div className="flex flex-col gap-2 relative z-10">
              <h2 className="text-2xl font-bold font-heading">Critical Error</h2>
              <p className="text-muted-foreground">
                A critical error occurred while loading the application.
              </p>
            </div>
            
            <div className="flex w-full mt-4 relative z-10">
              <button 
                onClick={() => reset()} 
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors"
              >
                <RefreshCcw size={16} />
                Try again
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
