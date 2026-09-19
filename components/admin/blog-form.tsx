"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
} from "@/components/ui/combobox";

import { AdminEditor } from "@/components/admin/admin-editor";
import { CloudinaryUpload } from "@/components/admin/cloudinary-upload";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters.").max(100, "Title is too long."),
  slug: z.string().min(3, "Slug must be at least 3 characters.").max(100, "Slug is too long."),
  excerpt: z.string().min(10, "Excerpt is required.").max(300, "Excerpt is too long."),
  body: z.string().min(10, "Body content is required."),
  featuredImage: z.string().url("Please upload a valid featured image."),
  featuredImageAlt: z.string().max(100, "Alt text is too long.").optional(),
  category: z.string().min(2, "Category is required."),
  tags: z.array(z.string()).min(1, "At least one tag is required."),
  seoTitle: z.string().max(60, "SEO Title should be under 60 characters.").optional(),
  seoDescription: z.string().max(160, "SEO Description should be under 160 characters.").optional(),
  status: z.enum(["draft", "published"]),
});

export type BlogFormData = z.infer<typeof formSchema>;

interface BlogFormProps {
  initialData?: Partial<BlogFormData>;
  categories?: { value: string; label: string }[];
  availableTags?: { value: string; label: string }[];
  onSubmitAction: (data: BlogFormData) => Promise<void>;
  isEditing?: boolean;
}

export function BlogForm({ initialData, categories = [], availableTags = [], onSubmitAction, isEditing = false }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [categoryInput, setCategoryInput] = React.useState("");
  
  const form = useForm<BlogFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      excerpt: initialData?.excerpt || "",
      body: initialData?.body || "",
      featuredImage: initialData?.featuredImage || "",
      featuredImageAlt: initialData?.featuredImageAlt || "",
      category: initialData?.category || "",
      tags: initialData?.tags || [],
      seoTitle: initialData?.seoTitle || "",
      seoDescription: initialData?.seoDescription || "",
      status: initialData?.status || "draft",
    },
  });
  console.log(form.formState.errors)
  

  const exactCategoryMatch = categories.find((c) => c.label.toLowerCase() === categoryInput.toLowerCase());
  const showCreateCategory = categoryInput.trim().length > 0 && !exactCategoryMatch;

  // Auto-generate slug from title if we are creating a new post
  React.useEffect(() => {
    if (!isEditing) {
      // eslint-disable-next-line react-hooks/incompatible-library
      const subscription = form.watch((value, { name }) => {
        if (name === "title") {
          const slug = (value.title || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          form.setValue("slug", slug, { shouldValidate: true });
        }
      });
      return () => subscription.unsubscribe();
    }
  }, [form, isEditing]);

  const handleSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmitAction(data);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Blog Post" : "Create Blog Post"}</CardTitle>
        <CardDescription>
          {isEditing ? "Update your post details below." : "Fill in the details to publish a new blog post."}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form id="blog-form" onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FieldGroup>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="My Awesome Post" autoComplete="off" />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="slug"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Slug</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="my-awesome-post" autoComplete="off" />
                    <FieldDescription>The URL-friendly name for this post.</FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="excerpt"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Excerpt</FieldLabel>
                  <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="A short summary of the post..." rows={3} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="featuredImage"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Featured Image</FieldLabel>
                    <CloudinaryUpload 
                      value={field.value} 
                      onChange={field.onChange} 
                      onRemove={() => field.onChange("")} 
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="featuredImageAlt"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Image Alt Text (Optional)</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Describe the featured image" autoComplete="off" />
                    <FieldDescription>Important for SEO and accessibility.</FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="body"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="col-span-full">
                  <FieldLabel>Body Content</FieldLabel>
                  <AdminEditor value={field.value} onChange={field.onChange} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Category</FieldLabel>
                    <Combobox
                      value={field.value}
                      onValueChange={(val) => field.onChange(val ?? "")}
                      inputValue={categoryInput}
                      onInputValueChange={setCategoryInput}
                    >
                      <ComboboxInput placeholder="Select category..." id={field.name} aria-invalid={fieldState.invalid} />
                      <ComboboxContent>
                        <ComboboxList>
                          {categories.map((cat) => (
                            <ComboboxItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </ComboboxItem>
                          ))}
                          {showCreateCategory && (
                            <ComboboxItem value={categoryInput.trim()}>
                              Create &quot;{categoryInput.trim()}&quot;
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="tags"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Tags</FieldLabel>
                    <Combobox
                      value={field.value}
                      onValueChange={field.onChange}
                      multiple
                    >
                      <ComboboxChips>
                        {((field.value as unknown as string[]) || []).map((tag) => (
                          <ComboboxChip key={tag}>
                            {tag}
                          </ComboboxChip>
                        ))}
                        <ComboboxChipsInput 
                          placeholder="Select or type tags..." 
                          id={field.name} 
                          aria-invalid={fieldState.invalid}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              const input = e.currentTarget;
                              const newTag = input.value.trim();
                              const currentTags = (field.value as unknown as string[]) || [];
                              if (newTag && !currentTags.includes(newTag)) {
                                field.onChange([...currentTags, newTag]);
                                input.value = "";
                              }
                            }
                          }}
                        />
                      </ComboboxChips>
                      <ComboboxContent>
                        <ComboboxList>
                          {availableTags.map((tag) => (
                            <ComboboxItem key={tag.value} value={tag.value}>
                              {tag.label}
                            </ComboboxItem>
                          ))}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="seoTitle"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>SEO Title (Optional)</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Leave blank to use post title" autoComplete="off" />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="seoDescription"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>SEO Description (Optional)</FieldLabel>
                    <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Leave blank to use excerpt" rows={2} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-6">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => {
            form.setValue("status", "draft");
            form.handleSubmit(handleSubmit)();
          }}
          disabled={isSubmitting}
        >
          {isSubmitting && form.getValues("status") === "draft" ? "Saving..." : "Save as Draft"}
        </Button>
        
        <Button 
          type="button"
          onClick={() => {
            form.setValue("status", "published");
            form.handleSubmit(handleSubmit)();
          }}
          disabled={isSubmitting}
        >
          {isSubmitting && form.getValues("status") === "published" ? "Publishing..." : "Publish"}
        </Button>
      </CardFooter>
    </Card>
  );
}
