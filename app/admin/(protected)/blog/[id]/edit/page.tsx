"use client";

import { use, useEffect, useState } from "react";
import { BlogForm, BlogFormData } from "@/components/admin/blog-form";
import { getBlogPost, getCategories, getTags, updateBlogPost } from "@/app/actions/blog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [initialData, setInitialData] = useState<Partial<BlogFormData> | null>(null);
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
  const [availableTags, setAvailableTags] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      const [cats, tags, post] = await Promise.all([
        getCategories(),
        getTags(),
        getBlogPost(resolvedParams.id)
      ]);
      setCategories(cats.map(c => ({ value: c.name, label: c.name })));
      setAvailableTags(tags.map(t => ({ value: t.name, label: t.name })));
      
      if (post) {
        setInitialData(post);
      } else {
        toast.error("Blog post not found!");
        router.push("/admin/blog");
      }
    }
    
    loadData();
  }, [resolvedParams.id, router]);

  const handleSubmit = async (data: BlogFormData) => {
    const result = await updateBlogPost(resolvedParams.id, data);
    
    if (result.success) {
      toast.success(`Post "${data.title}" updated successfully!`);
      router.push("/admin/blog");
    } else {
      toast.error(`Error: ${result.error}`);
    }
  };

  if (!initialData) {
    return <div className="flex justify-center p-12">Loading post data...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl w-full min-w-0">
      <BlogForm 
        categories={categories}
        availableTags={availableTags}
        initialData={initialData} 
        onSubmitAction={handleSubmit} 
        isEditing={true} 
      />
    </div>
  );
}
