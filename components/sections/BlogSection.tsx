"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

export default function BlogSection({ blogs = [] }: { blogs?: Blog[] }) {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="w-full bg-muted/20 text-foreground py-12 md:py-16 lg:py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[8cqw]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-[4cqw]">
          <div className="flex flex-col gap-4">
            <RevealText
              as="h2"
              id="blog-heading"
              className="text-[10cqw] md:text-[3.5cqw] font-bold leading-tight font-heading"
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
          {blogs.map((article, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
              <article className="group relative flex flex-col h-full bg-background/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Glass highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {article.image ? (
                  <div className="aspect-video bg-muted/50 rounded-2xl relative overflow-hidden flex items-center justify-center text-muted-foreground transition-colors duration-500 mb-6">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-muted/50 rounded-2xl relative overflow-hidden flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary transition-colors duration-500 mb-6">
                     <BookOpen size={48} className="absolute drop-shadow-sm scale-110 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                )}
                
                <div className="flex flex-col flex-1 gap-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <time dateTime={new Date(article.date).toISOString().split('T')[0]}>
                      {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    <a href={`/blog/${article.slug}`} className="focus:outline-none focus:underline" aria-label={`Read article: ${article.title}`}>
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
