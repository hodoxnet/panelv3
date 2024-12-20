import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
  onChange: (file: File) => void;
  currentImage?: string;
}

export default function ImageUpload({ onChange, currentImage }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(currentImage);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files?.length) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const handleRemove = () => {
    setPreview(undefined);
  };

  return (
    <div
      className={`relative group border-2 border-dashed rounded-lg transition-all
      ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
      ${preview ? 'bg-gray-50' : 'bg-white'}`}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {preview ? (
        <div className="relative p-4">
          <img 
            src={preview} 
            alt="Preview"
            className="w-full h-48 object-contain rounded"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 bg-red-100 rounded-full 
            text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <div className="text-sm text-center">
            <label
              htmlFor="popup-image"
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Dosya seçin
            </label>
            <span className="text-gray-500"> veya sürükleyip bırakın</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF (max. 2MB)</p>
        </div>
      )}
      
      <input
        type="file"
        id="popup-image"
        className="hidden"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
    </div>
  );
}