import { Metadata } from "next";
import HomeClient from "./home-client";

import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Coimbatore | D2N Digital Marketing",
  description: "D2N Digital Marketing is a digital marketing agency in Coimbatore offering SEO, Local SEO, Google Ads, Meta Ads, social media marketing, web development and lead generation.",
  alternates: {
    canonical: '/',
  },
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const blogs = await prisma.blogPost.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
    take: 3,
    select: {
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      createdAt: true,
    }
  });

  const formattedBlogs = blogs.map(blog => ({
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    date: blog.createdAt.toISOString(),
    readTime: "5 min read",
    image: blog.featuredImage,
  }));

  return <HomeClient blogs={formattedBlogs} />;
}
