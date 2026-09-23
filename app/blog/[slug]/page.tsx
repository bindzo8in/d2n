import { Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";
import Link from "next/link";
import { getPublicBlogPostBySlug, getPublicBlogPosts } from "@/app/actions/blog";
import { FadeIn } from "@/components/ui/FadeIn";
import { RevealText } from "@/components/ui/RevealText";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SocialShare } from "@/components/ui/social-share";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const dynamic = "force-dynamic";

// Generate Metadata dynamically for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublicBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://d2ndigitalmarketing.in';

  return {
    title: `${post.seoTitle || post.title} | D2N Blog`,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${slug}`,
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: ["D2N Digital Marketing"],
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt || post.title,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublicBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Calculate Reading Time
  // Assuming average reading speed of 200 words per minute
  // Strip HTML tags for word count
  const textContent = post.body.replace(/<[^>]*>?/gm, '');
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="w-full min-h-screen pt-20 md:pt-28 lg:pt-32 flex flex-col items-center">
      
      {/* Back Link */}
      <div className="w-full max-w-4xl px-6 mb-8 flex justify-start">
        <FadeIn delay={0.1} direction="left">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:underline group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </Link>
        </FadeIn>
      </div>

      {/* Article Header */}
      <header className="w-full max-w-4xl px-6 flex flex-col items-center text-center gap-6 mb-12">
        {post.category && (
          <FadeIn delay={0.2} direction="down">
            <Link 
              href={`/blog?category=${post.category.slug}`}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {post.category.name}
            </Link>
          </FadeIn>
        )}
        
        <RevealText as="h1" delay={0.3} className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight text-balance">
          {post.title}
        </RevealText>
        
        <FadeIn delay={0.4} direction="up" className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium text-muted-foreground mt-2">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary/70" />
            <time dateTime={post.createdAt.toISOString()}>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-primary/70" />
            <span>{readingTime} min read</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs overflow-hidden">
                D
             </div>
             <span>D2N Digital Marketing</span>
          </div>
        </FadeIn>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <FadeIn delay={0.5} direction="up" className="w-full max-w-5xl px-6 mb-16">
          <div className="relative w-full aspect-video md:aspect-2/1 rounded-3xl overflow-hidden shadow-2xl border border-border">
            <ParallaxImage 
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              priority
            />
          </div>
        </FadeIn>
      )}

      {/* Article Content & Sidebar */}
      <div className="w-full max-w-4xl px-6 pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 relative">
        
        {/* Main Content Area */}
        <article className="md:col-span-12 prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>

      </div>

      {/* Footer Area: Tags and Social Share */}
      <div className="w-full max-w-4xl px-6 py-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8 bg-muted/10 rounded-3xl mb-24">
        {/* Tags */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Related Tags</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.length > 0 ? post.tags.map((tag) => (
              <span key={tag.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium text-foreground">
                <Tag size={12} className="text-primary/60" />
                {tag.name}
              </span>
            )) : (
              <span className="text-sm text-muted-foreground">No tags available</span>
            )}
          </div>
        </div>

        {/* Social Share */}
        <div className="flex flex-col gap-3 items-start md:items-end w-full md:w-auto">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Share this article</h4>
          <SocialShare title={post.title} />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />

    </main>
  );
}
