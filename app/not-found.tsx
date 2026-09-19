import Link from "next/link";
import { Search, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { RevealText } from "@/components/ui/RevealText";

export default function NotFound() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 bg-background relative overflow-hidden px-6">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center gap-8 max-w-2xl">
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold font-heading text-transparent bg-clip-text bg-linear-to-br from-primary via-primary/80 to-primary/40">
            404
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <RevealText as="h2" className="text-3xl md:text-4xl font-bold font-heading">
            Page Not Found
          </RevealText>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Oops! The page you&apos;re looking for seems to have vanished into the digital void. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link href="/" className={buttonVariants({ size: "lg", className: "gap-2 text-md px-8 rounded-full" })}>
            <Home size={18} />
            Back to Home
          </Link>
          <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2 text-md px-8 rounded-full" })}>
            <Search size={18} />
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
