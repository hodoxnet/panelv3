import React, { useState } from 'react';
import { X } from 'lucide-react';
import TextField from '../common/TextField';
import Toggle from '../common/Toggle';
import type { VariantFormData } from '../../types/variant';

interface VariantFormProps {
  onSubmit: (data: VariantFormData) => void;
  onClose: () => void;
  initialData?: VariantFormData;
}

export default function VariantForm({ onSubmit, onClose, initialData }: VariantFormProps) {
  const [formData, setFormData] = useState<VariantFormData>(initialData || {
    name: '',
    isActive: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Varyant Ekle</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Varyant Adı"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              required
              placeholder="Örn: Renk, Beden, Numara"
            />

            <Toggle
              label="Aktif"
              checked={formData.isActive}
              onChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}