import React, { useState } from 'react';
import { X } from 'lucide-react';
import TextField from '../common/TextField';

interface FeatureValueFormProps {
  onSubmit: (name: string) => void;
  onClose: () => void;
}

export default function FeatureValueForm({ onSubmit, onClose }: FeatureValueFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      onClose();
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-medium">Yeni Özellik Değeri Ekle</h4>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Özellik Değeri"
          value={name}
          onChange={setName}
          required
          placeholder="Örn: 4GB, Intel i5, 1920x1080"
        />

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