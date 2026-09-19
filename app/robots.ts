import type { MetadataRoute } from 'next'
import { getPublicCategories } from "@/app/actions/blog"
import { env } from "@/lib/env"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const categories = await getPublicCategories()
  
  // Create disallow paths for each category pagination
  const categoryPaths = categories.map(cat => `/blog/${cat.slug}/*`)
  
  // Define all the popular AI agents and web crawlers you explicitly want to handle
  const targetBots = [
    '*', // Fallback for all other crawlers
    
    // Core Search Bots
    'Googlebot',
    'Bingbot',
    'Slurp',
    'DuckDuckBot',
    'BaiduSpider',
    'YandexBot',

    // OpenAI
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',

    // Anthropic
    'ClaudeBot',
    'anthropic-ai',
    'Claude-User',

    // Tech Giants AI
    'Google-Extended',
    'Applebot-Extended',
    'Meta-ExternalAgent',
    
    // LLMs, Aggregators & Data Crawlers
    'PerplexityBot',
    'Amazonbot',
    'CCBot',
    'cohere-ai'
  ]

  // Enforce consistent permissions across all specified user agents
  const rules = targetBots.map((bot) => ({
    userAgent: bot,
    allow: '/',
    disallow: [
      '/private/',
      '/_next/',     // Stops bots from wasting crawl budget on Next.js build assets
      '/api/',       // Protects your backend API routes
      ...categoryPaths,
    ],
  }))

  // Fallback to absolute production URL if environment variable is missing
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://d2ndigitalmarketing.in'

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
