export default function Loading() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Sleek animated loader matching the brand's look */}
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
        </div>
        
        {/* Text */}
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <h2 className="text-xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
            Loading...
          </h2>
          <p className="text-sm text-muted-foreground">Preparing your experience</p>
        </div>
      </div>
    </main>
  );
}
