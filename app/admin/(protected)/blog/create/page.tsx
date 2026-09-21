"use client";

import { BlogForm, BlogFormData } from "@/components/admin/blog-form";
import { createBlogPost, getCategories, getTags } from "@/app/actions/blog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateBlogPost() {
  const router = useRouter();
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
  const [availableTags, setAvailableTags] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      const [cats, tags] = await Promise.all([getCategories(), getTags()]);
      setCategories(cats.map(c => ({ value: c.name, label: c.name })));
      setAvailableTags(tags.map(t => ({ value: t.name, label: t.name })));
    }
    loadData();
  }, []);

  const handleSubmit = async (data: BlogFormData) => {
    const result = await createBlogPost(data);
    if (result.success) {
      toast.success(`Post "${data.title}" saved successfully!`);
      router.push("/admin/blog");
    } else {
      toast.error(`Error: ${result.error}`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl w-full min-w-0">
      <BlogForm categories={categories} availableTags={availableTags} onSubmitAction={handleSubmit} />
    </div>
  );
}
