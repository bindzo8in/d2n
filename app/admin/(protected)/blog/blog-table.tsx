"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { deleteBlogPost } from "@/app/actions/blog";
import { toast } from "sonner";
import { MoreHorizontal, Edit, Trash, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type BlogPostWithRelations = {
  id: string;
  title: string;
  slug: string;
  status: string;
  createdAt: Date;
  category: { id: string; name: string };
  tags: { id: string; name: string }[];
};

interface BlogTableProps {
  initialPosts: BlogPostWithRelations[];
}

const POSTS_PER_PAGE = 10;

export function BlogTable({ initialPosts }: BlogTableProps) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [posts, currentPage]);

  const confirmDelete = async () => {
    if (!postToDelete) return;
    const id = postToDelete;
    
    setIsDeleting(id);
    const result = await deleteBlogPost(id);
    setIsDeleting(null);
    setPostToDelete(null);
    
    if (result.success) {
      toast.success("Blog post deleted successfully");
      const updatedPosts = posts.filter(p => p.id !== id);
      setPosts(updatedPosts);
      
      // Adjust page if deleting last item on current page
      if (currentPage > 1 && updatedPosts.length <= (currentPage - 1) * POSTS_PER_PAGE) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      toast.error(result.error || "Failed to delete post");
    }
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("ID copied to clipboard");
  };

  if (posts.length === 0) {
    return (
      <div className="border rounded-md p-12 text-center text-muted-foreground bg-muted/20">
        No blog posts found. Create one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-150">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-25 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{post.title}</span>
                    <span className="text-xs text-muted-foreground">{post.slug}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={post.status === "published" ? "default" : "secondary"}>
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.category?.name}</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'medium',
                  }).format(new Date(post.createdAt))}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger 
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                      disabled={isDeleting === post.id}
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleCopyId(post.id)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push(`/admin/blog/${post.id}/edit`)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setPostToDelete(post.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{(currentPage - 1) * POSTS_PER_PAGE + 1}</span> to{" "}
            <span className="font-medium">{Math.min(currentPage * POSTS_PER_PAGE, posts.length)}</span> of{" "}
            <span className="font-medium">{posts.length}</span> posts
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      <Dialog open={!!postToDelete} onOpenChange={(open) => !open && setPostToDelete(null)}>
        <DialogContent className="w-[calc(100vw-2rem)] sm:w-full max-w-md sm:max-w-lg rounded-xl">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this blog post
              and remove its data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 justify-end sm:space-x-0">
            <DialogClose className={buttonVariants({ variant: "outline" })}>
              Cancel
            </DialogClose>
            <Button onClick={confirmDelete} variant="destructive">
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
