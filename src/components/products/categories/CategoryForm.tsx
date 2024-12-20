import React, { useState } from 'react';
import { X } from 'lucide-react';
import TextField from '../../common/TextField';
import ImageUpload from '../../common/ImageUpload';
import type { Category } from '../../../types/category';

interface CategoryFormProps {
  category?: Category;
  onSave: (category: Category) => void;
  onClose: () => void;
}

export default function CategoryForm({ category, onSave, onClose }: CategoryFormProps) {
  const [formData, setFormData] = useState({
    title: category?.title || '',
    image: category?.image || '',
    description: category?.description || '',
    meta: category?.meta || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSave({
      id: category?.id || Date.now().toString(),
      ...formData,
      children: category?.children || []
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              {category ? 'Kategori Düzenle' : 'Yeni Kategori'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                  // Gerçek uygulamada burada dosya yükleme işlemi yapılır
                  const imageUrl = URL.createObjectURL(file);
                  setFormData({ ...formData, image: imageUrl });
                }
              }}
              required
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sayfa Açıklama (Description)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Kategori açıklaması..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Meta Kelimeler
              </label>
              <textarea
                value={formData.meta}
                onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="anahtar kelime 1, anahtar kelime 2, ..."
              />
              <p className="text-sm text-gray-500">Her kelimenin sonuna virgül koyunuz</p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
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