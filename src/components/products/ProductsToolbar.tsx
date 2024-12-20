import React from 'react';
import { Plus, FileSpreadsheet, Trash2 } from 'lucide-react';

interface ProductsToolbarProps {
  selectedIds: string[];
  onAdd: () => void;
  onBulkAction: () => void;
  onExcelAction: () => void;
  onDelete: () => void;
}

export default function ProductsToolbar({
  selectedIds,
  onAdd,
  onBulkAction,
  onExcelAction,
  onDelete
}: ProductsToolbarProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onAdd}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
      >
        <Plus className="w-4 h-4" />
        Yeni Ürün Ekle
      </button>

      <button
        onClick={onBulkAction}
        disabled={selectedIds.length === 0}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Seçilenlere Uygula</span>
      </button>

      <button
        onClick={onExcelAction}
        className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
      >
        <FileSpreadsheet className="w-4 h-4" />
        Excel İşlemleri
      </button>

      <button
        onClick={onDelete}
        disabled={selectedIds.length === 0}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
        Tüm Veriyi Sil
      </button>
    </div>
  );
}