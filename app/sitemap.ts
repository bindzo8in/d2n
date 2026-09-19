import type { MetadataRoute } from 'next'
import { SERVICES_DATA } from '@/lib/data/services'
import { LOCATIONS_DATA } from '@/lib/data/locations'
import { getPublicBlogPosts, getPublicCategories } from '@/app/actions/blog'
import { env } from '@/lib/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fallback to absolute production URL if environment variable is missing
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://d2ndigitalmarketing.in'

  await Promise.all([
    getPublicBlogPosts(),
    getPublicCategories(),
  ])

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS_DATA.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...serviceRoutes,
    ...locationRoutes,
  ]
}
