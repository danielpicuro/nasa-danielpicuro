// file-upload.tsx
'use client';

import type React from 'react';

import { Upload } from 'lucide-react';
import { useState } from 'react';

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`!flex !flex-col !items-center !justify-center !gap-4 !rounded-lg !border-2 !border-dashed !p-12 !transition-colors ${
        isDragging ? '!border-cyan-400 !bg-cyan-950/20' : '!border-gray-600 !bg-gray-900/20'
      }`}
    >
      <div className="!flex !h-16 !w-16 !items-center !justify-center !rounded-full !border-2 !border-cyan-500 !bg-cyan-950/30">
        <Upload className="!h-8 !w-8 !text-cyan-400" />
      </div>
      <p className="!text-gray-400">Drag files here</p>
      <button className="!rounded-lg !bg-cyan-500 !px-8 !py-3 !font-medium !text-white !transition-colors hover:!bg-cyan-600">
        Select Files
      </button>
    </div>
  );
}
