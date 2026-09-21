import { getBlogPosts } from "@/app/actions/blog";
import { BlogTable } from "./blog-table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default async function BlogAdminPage() {
  const posts = await getBlogPosts();

  return (
    <div className="w-full mx-auto p-4 space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link 
          href="/admin/blog/create" 
          className={buttonVariants({ className: "w-full sm:w-auto" })}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Link>
      </div>

      <BlogTable initialPosts={posts} />
    </div>
  );
}
