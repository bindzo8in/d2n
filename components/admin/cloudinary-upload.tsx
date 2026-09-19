"use client";

import { env } from "@/lib/env";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";

interface CloudinaryUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onRemove?: () => void;
}

export function CloudinaryUpload({ value, onChange, onRemove }: CloudinaryUploadProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUpload = (result: any) => {
    if (result.event === "success") {
      onChange(result.info.secure_url);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {value ? (
        <div className="relative w-full max-w-sm overflow-hidden rounded-md border aspect-video">
          <Image
            src={value}
            alt="Uploaded Image"
            fill
            className="object-cover"
          />
          {onRemove && (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={() => onRemove()}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : (
        <CldUploadWidget
          uploadPreset={env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={onUpload}
        >
          {({ open }) => {
            return (
              <Button
                type="button"
                variant="outline"
                className="w-full max-w-sm border-dashed"
                onClick={() => open()}
              >
                <ImagePlus className="mr-2 h-4 w-4" />
                Upload an Image
              </Button>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
}
