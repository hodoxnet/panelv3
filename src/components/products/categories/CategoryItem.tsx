import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ChevronRight, GripVertical, Pencil, Trash2 } from 'lucide-react';
import type { Category } from '../../../types/category';

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className={`flex items-center gap-4 p-4 bg-white border rounded-lg ${
        isDragging ? 'shadow-lg border-blue-300' : 'border-gray-200'
      }`}>
        {/* Sürükleme Tutacağı */}
        <button
          {...attributes}
          {...listeners}
          className="flex-shrink-0 cursor-grab active:cursor-grabbing"
        >
          <GripVertical className="w-5 h-5 text-gray-400" />
        </button>

        {/* Genişletme Butonu */}
        {category.children.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0"
          >
            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-90' : ''
            }`} />
          </button>
        )}

        {/* Kategori Görseli */}
        <div className="flex-shrink-0 w-12 h-12">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Kategori Bilgileri */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
          <p className="text-sm text-gray-500 truncate">{category.description}</p>
        </div>

        {/* İşlem Butonları */}
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50">
            <Pencil className="w-5 h-5" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alt Kategoriler */}
      {isExpanded && category.children.length > 0 && (
        <div className="ml-12 mt-2 space-y-2">
          {category.children.map(child => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </div>
      )}
    </div>
  );
}