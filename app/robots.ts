import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
const siteUrl =
env.NEXT_PUBLIC_SITE_URL || "https://d2ndigitalmarketing.com";

return {
rules: [
{
userAgent: "*",
allow: "/",
disallow: [
"/admin/",
"/private/",
"/api/",
"/_next/",
],
},
],
sitemap: `${siteUrl}/sitemap.xml`,
};
}
