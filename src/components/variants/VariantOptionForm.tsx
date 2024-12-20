import React, { useState } from 'react';
import { X } from 'lucide-react';
import TextField from '../common/TextField';
import NumberInput from '../common/NumberInput';
import type { VariantOption } from '../../types/variant';

interface VariantOptionFormProps {
  onSubmit: (data: Omit<VariantOption, 'id'>) => void;
  onClose: () => void;
}

export default function VariantOptionForm({ onSubmit, onClose }: VariantOptionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    stock: 0,
    price: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-medium">Yeni Seçenek Ekle</h4>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Seçenek Adı"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          required
          placeholder="Örn: Kırmızı, XL, 42"
        />

        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Stok"
            value={formData.stock}
            onChange={(value) => setFormData({ ...formData, stock: value })}
            min={0}
          />

          <NumberInput
            label="Fiyat"
            value={formData.price}
            onChange={(value) => setFormData({ ...formData, price: value })}
            min={0}
            suffix="₺"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
}