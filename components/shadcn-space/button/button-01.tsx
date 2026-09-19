
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ButtonWithIcon = ({ content, href }: { content?: string; href?: string }) => {
  const classes =
    "relative inline-flex items-center text-sm font-medium rounded-full h-12 p-1 pl-6 pr-14 bg-primary text-primary-foreground group transition-all duration-500 ease-in-out hover:pl-14 hover:pr-6 w-fit overflow-hidden cursor-pointer select-none";

  const children = (
    <>
      <span className="relative z-10 transition-all duration-500">
        {content || "Let's Collaborate"}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

export default ButtonWithIcon;
