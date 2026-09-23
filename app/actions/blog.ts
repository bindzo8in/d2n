"use server";

import { prisma } from "@/lib/db";
import { BlogFormData } from "@/components/admin/blog-form";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function createBlogPost(data: BlogFormData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    if (!session) {
      return { success: false, error: "Unauthorized" };
    }

    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: data.slug }
    });
    if (existingPost) {
      return { success: false, error: "A blog post with this slug already exists. Please choose a unique slug." };
    }

    // Upsert the category to ensure it exists
    const category = await prisma.blogCategory.upsert({
      where: { slug: data.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
      update: {},
      create: {
        name: data.category,
        slug: data.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });

    const tags = await Promise.all(
      data.tags.map((name: string) =>
        prisma.blogTag.upsert({
          where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
          update: {},
          create: {
            name,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          },
        })
      )
    );

    // Create the blog post
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        body: data.body,
        featuredImage: data.featuredImage,
        featuredImageAlt: data.featuredImageAlt,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        status: data.status,
        categoryId: category.id,
        tags: {
          connect: tags.map((t) => ({ id: t.id })),
        },
      },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating blog post:", error);
    return { success: false, error: "Failed to create blog post" };
  }
}

export async function updateBlogPost(id: string, data: BlogFormData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    if (!session) {
      return { success: false, error: "Unauthorized" };
    }

    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: data.slug }
    });
    if (existingPost && existingPost.id !== id) {
      return { success: false, error: "A blog post with this slug already exists. Please choose a unique slug." };
    }

    // Upsert the category to ensure it exists
    const category = await prisma.blogCategory.upsert({
      where: { slug: data.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
      update: {},
      create: {
        name: data.category,
        slug: data.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });

    const tags = await Promise.all(
      data.tags.map((name: string) =>
        prisma.blogTag.upsert({
          where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
          update: {},
          create: {
            name,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          },
        })
      )
    );

    // Update the blog post
    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        body: data.body,
        featuredImage: data.featuredImage,
        featuredImageAlt: data.featuredImageAlt,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        status: data.status,
        categoryId: category.id,
        tags: {
          set: tags.map((t) => ({ id: t.id })),
        },
      },
    });

    revalidatePath("/admin/blog");
    revalidatePath(`/admin/blog/${id}/edit`);
    revalidatePath("/blog");

    if (existingPost?.slug !== data.slug) {
      revalidatePath(`/blog/${existingPost?.slug}`);
    }

    revalidatePath(`/blog/${data.slug}`);
    return { success: true, post };
  } catch (error) {
    console.error("Error updating blog post:", error);
    return { success: false, error: "Failed to update blog post" };
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.blogCategory.findMany({
      orderBy: { name: 'asc' }
    });
    return categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

export async function getTags() {
  try {
    const tags = await prisma.blogTag.findMany({
      orderBy: { name: 'asc' }
    });
    return tags;
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    return [];
  }
}

export async function getBlogPost(id: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        category: true,
        tags: true
      }
    });

    if (!post) return null;

    // Transform to BlogFormData shape
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      body: post.body,
      featuredImage: post.featuredImage,
      featuredImageAlt: post.featuredImageAlt || "",
      category: post.category.name,
      tags: post.tags.map(t => t.name),
      seoTitle: post.seoTitle || "",
      seoDescription: post.seoDescription || "",
      status: post.status as "draft" | "published",
    };
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      include: {
        category: true,
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export async function deleteBlogPost(id: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    if (!session) {
      return { success: false, error: "Unauthorized" };
    }

    const postToDelete = await prisma.blogPost.findUnique({
      where: { id },
      select: { slug: true }
    });

    await prisma.blogPost.delete({
      where: { id },
    });
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    if (postToDelete) {
      revalidatePath(`/blog/${postToDelete.slug}`);
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Failed to delete blog post" };
  }
}

// --- Public Facing Functions ---

export async function getPublicBlogPosts({
  page = 1,
  limit = 9,
  categorySlug
}: {
  page?: number,
  limit?: number,
  categorySlug?: string
} = {}) {
  try {
    const where = {
      status: "published",
      ...(categorySlug ? { category: { slug: categorySlug } } : {})
    };

    const [posts, totalCount] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          category: true,
          tags: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.blogPost.count({ where })
    ]);

    return {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page
    };
  } catch (error) {
    console.error("Failed to fetch public posts:", error);
    return { posts: [], totalCount: 0, totalPages: 0, currentPage: 1 };
  }
}

export async function getPublicBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        slug,
        status: "published"
      },
      include: {
        category: true,
        tags: true,
      }
    });
    return post;
  } catch (error) {
    console.error(`Failed to fetch public post by slug ${slug}:`, error);
    return null;
  }
}

export async function getPublicCategories() {
  try {
    // Only return categories that have at least one published post
    const categories = await prisma.blogCategory.findMany({
      where: {
        posts: {
          some: {
            status: "published"
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    });
    return categories;
  } catch (error) {
    console.error("Failed to fetch public categories:", error);
    return [];
  }
}
