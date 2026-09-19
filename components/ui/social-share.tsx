"use client";

import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url?: string;
  title: string;
  className?: string;
}

export function SocialShare({ url = "", title, className }: SocialShareProps) {
  const [mounted, setMounted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (!url && typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
  };

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(currentUrl);
      toast.success("Link copied to clipboard!");
    }
  };

  if (!mounted) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span className="text-sm font-semibold text-muted-foreground mr-2">Share:</span>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full bg-background hover:bg-muted hover:text-foreground hover:scale-105 transition-all"
        onClick={() => window.open(shareLinks.linkedin, "_blank", "noopener,noreferrer")}
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#0A66C2]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full bg-background hover:bg-muted hover:text-foreground hover:scale-105 transition-all"
        onClick={() => window.open(shareLinks.twitter, "_blank", "noopener,noreferrer")}
        aria-label="Share on X (Twitter)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
      </Button>

      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full bg-background hover:bg-muted hover:text-foreground hover:scale-105 transition-all"
        onClick={() => window.open(shareLinks.facebook, "_blank", "noopener,noreferrer")}
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#1877F2]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </Button>

      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full bg-background hover:bg-muted hover:text-foreground hover:scale-105 transition-all"
        onClick={() => window.open(shareLinks.whatsapp, "_blank", "noopener,noreferrer")}
        aria-label="Share on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-4 w-4 text-[#25D366]"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13.5c1.5 1 3.5 1 5 0" />
        </svg>
      </Button>

      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full bg-background hover:bg-muted hover:text-foreground hover:scale-105 transition-all"
        onClick={handleCopyLink}
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
