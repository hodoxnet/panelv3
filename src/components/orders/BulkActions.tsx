import React from 'react';
import { Trash2 } from 'lucide-react';

interface BulkActionsProps {
  selectedIds: string[];
  onDelete: () => void;
}

export default function BulkActions({ selectedIds, onDelete }: BulkActionsProps) {
  if (selectedIds.length === 0) return null;

  return (
    <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-4">
      <span className="text-sm text-gray-600">
        {selectedIds.length} sipariş seçildi
      </span>
      <button
        onClick={onDelete}
        className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md"
      >
        <Trash2 className="w-4 h-4" />
        Toplu Sil
      </button>
    </div>
  );
}