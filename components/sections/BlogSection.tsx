"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

const ARTICLES = [
  {
    title: "Best Digital Marketing Agency in Coimbatore (2026 Guide)",
    excerpt: "How to choose the best digital marketing agency in Coimbatore — services, pricing, red flags, and a 12-point checklist for local business owners.",
    link: "#guide-agency",
    date: "Sep 12, 2026",
    readTime: "8 min read"
  },
  {
    title: "SEO Services in Coimbatore — Digital Marketing Agency Guide",
    excerpt: "Complete 2026 guide to SEO services from a leading digital marketing agency in Coimbatore — technical, on-page, local SEO, pricing and timelines.",
    link: "#guide-seo",
    date: "Sep 5, 2026",
    readTime: "6 min read"
  },
  {
    title: "Google Business Profile Tips | Digital Marketing Service Coimbatore",
    excerpt: "Step-by-step Google Business Profile optimization from a digital marketing service in Coimbatore — categories, photos, reviews and local pack ranking.",
    link: "#guide-gbp",
    date: "Aug 28, 2026",
    readTime: "5 min read"
  }
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="w-full bg-muted/20 text-foreground py-[15cqw] px-[5cqw]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[8cqw]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-[4cqw]">
          <div className="flex flex-col gap-4">
            <RevealText
              as="h2"
              id="blog-heading"
              className="text-[4cqw] md:text-[3.5cqw] font-bold leading-tight font-heading"
            >
              Further Reading from Our Blog
            </RevealText>
          </div>
          <FadeIn delay={0.2} direction="left">
            <a
              href="#all-articles"
              className="group flex items-center gap-2 text-primary hover:text-primary transition-colors font-medium text-lg focus:outline-none focus:underline"
              aria-label="Browse all articles"
            >
              Browse all articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
              <article className="group relative flex flex-col h-full bg-background/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Glass highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="aspect-video bg-muted/50 rounded-2xl relative overflow-hidden flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary transition-colors duration-500 mb-6">
                   <BookOpen size={48} className="absolute drop-shadow-sm scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
                
                <div className="flex flex-col flex-1 gap-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <time dateTime="2026-09-12">{article.date}</time>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    <a href={article.link} className="focus:outline-none focus:underline" aria-label={`Read article: ${article.title}`}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
