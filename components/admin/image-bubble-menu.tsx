"use client";

import React, { useEffect, useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ImageBubbleMenu() {
  const { editor } = useCurrentEditor();
  const [altText, setAltText] = useState("");

  const isImageActive = editor?.isActive("image");

  useEffect(() => {
    if (isImageActive && editor) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAltText(editor.getAttributes("image").alt || "");
    }
  }, [isImageActive, editor]);

  if (!editor) return null;

  const handleSubmit = () => {
    editor.chain().focus().updateAttributes("image", { alt: altText }).run();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <BubbleMenu
      editor={editor}
      // @ts-expect-error - Tippy options are not fully typed in Tiptap's BubbleMenu
      tippyOptions={{ duration: 100, placement: "bottom" }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      shouldShow={({ editor }: { editor: any }) => editor.isActive("image")}
      className="flex items-center gap-2 rounded-md border bg-background p-2 shadow-md w-75"
    >
      <div className="flex w-full items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">Alt Text:</span>
        <Input
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe image..."
          className="h-8 flex-1 text-sm"
          autoFocus
        />
        <Button type="button" onClick={handleSubmit} size="sm" className="h-8 px-2">
          <Check className="h-4 w-4" />
        </Button>
      </div>
    </BubbleMenu>
  );
}
