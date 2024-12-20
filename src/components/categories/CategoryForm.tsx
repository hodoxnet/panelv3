import React, { useState } from 'react';
import { X } from 'lucide-react';
import TextField from '../common/TextField';
import ImageUpload from '../common/ImageUpload';
import type { CategoryFormData } from '../../types/category';

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => void;
  onClose: () => void;
  initialData?: CategoryFormData;
}

export default function CategoryForm({ onSubmit, onClose, initialData }: CategoryFormProps) {
  const [formData, setFormData] = useState<CategoryFormData>(initialData || {
    title: '',
    image: '',
    description: '',
    meta: ''
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
            <h3 className="text-lg font-medium">Kategori Ekle</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Başlık"
              value={formData.title}
              onChange={(value) => setFormData({ ...formData, title: value })}
              required
            />

            <ImageUpload
              label="Listeleme Görseli"
              value={formData.image}
              onChange={(file) => {
                if (file instanceof File) {
                  const imageUrl = URL.createObjectURL(file);
                  setFormData({ ...formData, image: imageUrl });
                }
              }}
            />

            <TextField
              label="Sayfa Açıklama (Description)"
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
              multiline
            />

            <TextField
              label="Meta Kelimeler"
              value={formData.meta}
              onChange={(value) => setFormData({ ...formData, meta: value })}
              multiline
              placeholder="Her kelimenin sonuna virgül koyunuz"
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