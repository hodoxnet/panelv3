import React, { useState, useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';

interface FileUploadProps {
  label: string;
  value: string;
  onChange: (file: File) => void;
  accept?: string;
  required?: boolean;
}

export default function FileUpload({
  label,
  value,
  onChange,
  accept,
  required
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setSelectedFile(file);
    onChange(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Seçili Dosya Gösterimi */}
      {selectedFile && (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-4">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">{selectedFile.name}</span>
          </div>
          <button
            onClick={removeFile}
            className="p-1 hover:bg-gray-200 rounded-full"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      )}

      {/* Yükleme Alanı */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 transition-colors
        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center">
          <Upload className="w-8 h-8 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">
            Dosya seçin veya sürükleyip bırakın
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 px-4 py-2 text-sm text-blue-600 bg-blue-50 
            rounded-md hover:bg-blue-100 transition-colors"
          >
            Dosya Seç
          </button>
          {accept && (
            <p className="mt-2 text-xs text-gray-500">
              İzin verilen formatlar: {accept}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}