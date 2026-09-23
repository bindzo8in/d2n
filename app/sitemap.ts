import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/lib/data/services";
import { LOCATIONS_DATA } from "@/lib/data/locations";
import { getPublicBlogPosts } from "@/app/actions/blog";
import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const siteUrl =
env.NEXT_PUBLIC_SITE_URL || "https://d2ndigitalmarketing.com";

const posts = await getPublicBlogPosts({
page: 1,
limit: 1000,
});

const blogRoutes: MetadataRoute.Sitemap = posts.posts.map((post) => ({
url: `${siteUrl}/blog/${post.slug}`,
lastModified: post.updatedAt ?? post.createdAt,
changeFrequency: "weekly",
priority: 0.7,
}));

const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
url: `${siteUrl}/services/${service.slug}`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.7,
}));

const locationRoutes: MetadataRoute.Sitemap = LOCATIONS_DATA.map((location) => ({
url: `${siteUrl}/locations/${location.slug}`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.8,
}));

return [
{
url: siteUrl,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},
{
url: `${siteUrl}/about`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${siteUrl}/services`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},
{
url: `${siteUrl}/contact`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},

...serviceRoutes,
...locationRoutes,
...blogRoutes,

];
}
