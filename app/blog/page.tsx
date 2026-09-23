import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublicBlogPosts, getPublicCategories } from "@/app/actions/blog";
import { FadeIn } from "@/components/ui/FadeIn";
import { RevealText } from "@/components/ui/RevealText";
import { Calendar, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Insights on Digital Marketing",
  description: "Read our latest insights, strategies, and tips on SEO, Google Ads, Meta Ads, and digital marketing to grow your business.",
};

export default async function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const page = typeof resolvedSearchParams.page === "string" ? parseInt(resolvedSearchParams.page) : 1;
  const categorySlug = typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category : undefined;

  const [{ posts, totalPages, currentPage }, categories] = await Promise.all([
    getPublicBlogPosts({ page, limit: 9, categorySlug }),
    getPublicCategories()
  ]);

  return (
    <main className="w-full min-h-screen pt-20 md:pt-28 lg:pt-32 pb-24 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pb-16 flex flex-col items-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <RevealText as="h1" delay={0.1} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight max-w-3xl">
          Digital Marketing Insights
        </RevealText>
        
        <FadeIn delay={0.3} direction="up" className="mt-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
            Strategies, tips, and the latest news in SEO, Google Ads, and Meta Ads to help your business thrive online.
          </p>
        </FadeIn>
      </section>

      {/* Category Filters */}
      {categories.length > 0 && (
        <section className="w-full max-w-7xl px-6 mb-12 flex flex-wrap justify-center gap-3">
          <FadeIn delay={0.4} direction="up" className="w-full flex flex-wrap justify-center gap-3">
            <Link 
              href="/blog"
              className={cn(
                "px-5 py-2 rounded-full border transition-all text-sm font-medium hover:scale-105",
                !categorySlug 
                  ? "bg-primary text-primary-foreground border-primary shadow-md" 
                  : "bg-background text-foreground border-border hover:border-primary/50"
              )}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link 
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className={cn(
                  "px-5 py-2 rounded-full border transition-all text-sm font-medium hover:scale-105",
                  categorySlug === cat.slug 
                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                    : "bg-background text-foreground border-border hover:border-primary/50"
                )}
              >
                {cat.name}
              </Link>
            ))}
          </FadeIn>
        </section>
      )}

      {/* Blog Grid */}
      <section className="w-full max-w-7xl px-6 mb-16 relative z-10">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeIn key={post.id} delay={0.2 + index * 0.1} direction="up" fullWidth>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-background rounded-3xl overflow-hidden border border-border hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-16/10 overflow-hidden bg-muted">
                    {post.featuredImage ? (
                      <Image 
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No Image
                      </div>
                    )}
                    
                    {/* Category Badge overlay */}
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm border border-border/50 text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                        {post.category.name}
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-1 gap-4 relative">
                    <h2 className="text-xl font-bold font-heading line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground/80 mt-2 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <time dateTime={post.createdAt.toISOString()}>
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </time>
                      </div>
                      <span className="font-semibold text-primary group-hover:underline underline-offset-4">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.2} direction="up" className="w-full py-24 flex flex-col items-center justify-center text-center bg-muted/20 rounded-3xl border border-dashed border-border">
            <Tag size={48} className="text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-bold mb-2">No posts found</h3>
            <p className="text-muted-foreground max-w-md">
              Check back later for new insights, or try selecting a different category.
            </p>
          </FadeIn>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <FadeIn delay={0.5} direction="up" className="flex items-center justify-center gap-2 mt-4">
          <Link 
            href={`/blog?page=${Math.max(1, currentPage - 1)}${categorySlug ? `&category=${categorySlug}` : ''}`}
            className={cn(
              "p-2 rounded-xl border transition-colors flex items-center justify-center",
              currentPage === 1 
                ? "pointer-events-none opacity-50 border-border bg-muted/50" 
                : "border-border bg-background hover:bg-muted hover:border-primary/50 text-foreground"
            )}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </Link>
          
          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
            Page <span className="text-foreground">{currentPage}</span> of {totalPages}
          </div>

          <Link 
            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}${categorySlug ? `&category=${categorySlug}` : ''}`}
            className={cn(
              "p-2 rounded-xl border transition-colors flex items-center justify-center",
              currentPage === totalPages 
                ? "pointer-events-none opacity-50 border-border bg-muted/50" 
                : "border-border bg-background hover:bg-muted hover:border-primary/50 text-foreground"
            )}
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </Link>
        </FadeIn>
      )}

    </main>
  );
}
