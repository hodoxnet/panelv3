import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { isValidImportFile } from '../../utils/fileValidation';
import toast from 'react-hot-toast';

interface ExcelImportModalProps {
  onClose: () => void;
}

export default function ExcelImportModal({ onClose }: ExcelImportModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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
    if (file && isValidImportFile(file)) {
      setSelectedFile(file);
    } else {
      toast.error('Lütfen geçerli bir dosya seçin (.xlsx, .xls, .csv)');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidImportFile(file)) {
        setSelectedFile(file);
      } else {
        toast.error('Lütfen geçerli bir dosya seçin (.xlsx, .xls, .csv)');
      }
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      // Dosya işleme mantığı burada olacak
      toast.success('Dosya başarıyla içe aktarıldı!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 pt-5 pb-4">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Excel/CSV Dosyası İçe Aktar
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Lütfen içe aktarmak istediğiniz dosyayı seçin veya sürükleyip bırakın.
              </p>
            </div>

            <div
              className={`mt-4 p-6 border-2 border-dashed rounded-lg text-center ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  {selectedFile ? selectedFile.name : 'Dosya seçin veya sürükleyip bırakın'}
                </span>
              </label>
              <p className="mt-2 text-xs text-gray-500">
                Excel (.xlsx, .xls) veya CSV (.csv) - max. 10MB
              </p>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-3 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              İptal
            </button>
            <button
              onClick={handleImport}
              disabled={!selectedFile}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              İçe Aktar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}