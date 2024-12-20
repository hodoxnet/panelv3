import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import VariantOptionForm from './VariantOptionForm';
import type { Variant, VariantOption } from '../../types/variant';

interface VariantListProps {
  variants: Variant[];
  onDelete: (id: string) => void;
  onUpdate: (variant: Variant) => void;
}

export default function VariantList({ variants, onDelete, onUpdate }: VariantListProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const handleAddOption = (variantId: string, option: Omit<VariantOption, 'id'>) => {
    const variant = variants.find(v => v.id === variantId);
    if (!variant) return;

    const newOption: VariantOption = {
      id: Date.now().toString(),
      ...option
    };

    onUpdate({
      ...variant,
      options: [...variant.options, newOption]
    });
  };

  const handleDeleteOption = (variantId: string, optionId: string) => {
    const variant = variants.find(v => v.id === variantId);
    if (!variant) return;

    onUpdate({
      ...variant,
      options: variant.options.filter(o => o.id !== optionId)
    });
  };

  return (
    <div className="space-y-6">
      {variants.map(variant => (
        <div key={variant.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">{variant.name}</h3>
              <span className={`text-sm ${variant.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {variant.isActive ? 'Aktif' : 'Pasif'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedVariant(variant.id)}
                className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(variant.id)}
                className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Seçenekler Tablosu */}
          {variant.options.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Seçenek</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Stok</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Fiyat</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {variant.options.map(option => (
                    <tr key={option.id}>
                      <td className="px-4 py-2">{option.name}</td>
                      <td className="px-4 py-2">{option.stock}</td>
                      <td className="px-4 py-2">{option.price} ₺</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteOption(variant.id, option.id)}
                          className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedVariant === variant.id && (
            <VariantOptionForm
              onSubmit={(option) => handleAddOption(variant.id, option)}
              onClose={() => setSelectedVariant(null)}
            />
          )}
        </div>
      ))}

      {variants.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Henüz varyant eklenmemiş
        </div>
      )}
    </div>
  );
}