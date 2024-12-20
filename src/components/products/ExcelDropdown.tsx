import React, { useState } from 'react';
import { FileSpreadsheet, Download, Upload, ChevronDown } from 'lucide-react';
import { exportToExcel } from '../../utils/excelExport';
import ExcelImportModal from './ExcelImportModal';
import type { Product } from '../../types/product';

interface ExcelDropdownProps {
  selectedIds: string[];
  products: Product[];
}

export default function ExcelDropdown({ selectedIds, products }: ExcelDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  const handleImportClick = () => {
    setIsOpen(false);
    setShowImportModal(true);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-md 
        hover:bg-amber-600 transition-colors"
      >
        <FileSpreadsheet className="w-4 h-4" />
        Excel İşlemleri
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <div className="py-1">
            <button
              onClick={() => {
                exportToExcel(products, selectedIds, 'csv');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Download className="w-4 h-4" />
              CSV'ye Aktar
            </button>
            <button
              onClick={() => {
                exportToExcel(products, selectedIds, 'excel');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Download className="w-4 h-4" />
              Excel'e Aktar
            </button>
            <button
              onClick={handleImportClick}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Upload className="w-4 h-4" />
              Dosyadan İçe Aktar
            </button>
          </div>
        </div>
      )}

      {showImportModal && (
        <ExcelImportModal onClose={() => setShowImportModal(false)} />
      )}
    </div>
  );
}