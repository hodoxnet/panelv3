import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import VariantList from '../../components/variants/VariantList';
import VariantForm from '../../components/variants/VariantForm';
import type { Variant, VariantFormData } from '../../types/variant';
import toast from 'react-hot-toast';

export default function VariantsPage() {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddVariant = (data: VariantFormData) => {
    const newVariant: Variant = {
      id: Date.now().toString(),
      ...data,
      options: []
    };

    setVariants(prev => [...prev, newVariant]);
    setShowForm(false);
    toast.success('Varyant başarıyla eklendi');
  };

  const handleDeleteVariant = (id: string) => {
    setVariants(prev => prev.filter(v => v.id !== id));
    toast.success('Varyant başarıyla silindi');
  };

  const handleUpdateVariant = (updatedVariant: Variant) => {
    setVariants(prev => prev.map(v => 
      v.id === updatedVariant.id ? updatedVariant : v
    ));
    toast.success('Varyant başarıyla güncellendi');
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Varyantlar</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Yeni Varyant
          </button>
        </div>

        <div className="p-6">
          <VariantList
            variants={variants}
            onDelete={handleDeleteVariant}
            onUpdate={handleUpdateVariant}
          />
        </div>
      </div>

      {showForm && (
        <VariantForm
          onSubmit={handleAddVariant}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}