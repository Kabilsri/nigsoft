"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  onUpload: (url: string) => void;
  folder?: string;
  currentImage?: string;
  label?: string;
}

export default function ImageUpload({ 
  onUpload, 
  folder = 'products', 
  currentImage,
  label = 'Upload Image'
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Invalid file type. Use JPEG, PNG, WebP, or GIF');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large. Maximum size is 5MB');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setPreview(data.url);
        onUpload(data.url);
        toast.success('Image uploaded successfully');
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (error) {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const clearImage = () => {
    setPreview(null);
    onUpload('');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      
      {preview ? (
        <div className="relative w-full h-48 border rounded-lg overflow-hidden">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, WebP, GIF (MAX. 5MB)</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      )}

      {uploading && (
        <div className="flex items-center justify-center py-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          <span className="ml-2 text-sm text-gray-600">Uploading...</span>
        </div>
      )}
    </div>
  );
}
