import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CategoryItem from '../../components/categories/CategoryItem';
import CategoryForm from '../../components/categories/CategoryForm';
import { addCategory, removeCategory, makeRootCategory, makeSubCategory } from '../../utils/categoryHelpers';
import { mockCategories } from '../../data/mockCategories';
import type { Category, CategoryFormData } from '../../types/category';
import toast from 'react-hot-toast';

export default function ProductCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [showForm, setShowForm] = useState(false);
  const [selectedParentId, setSelectedParentId] = useState<string | undefined>();

  const handleAddCategory = (data: CategoryFormData) => {
    const newCategory: Category = {
      id: Date.now().toString(),
      ...data,
      children: []
    };

    setCategories(prev => addCategory(prev, newCategory, selectedParentId));
    setShowForm(false);
    setSelectedParentId(undefined);
    toast.success('Kategori başarıyla eklendi');
  };

  const handleEditCategory = (category: Category) => {
    toast.success('Kategori düzenleme özelliği yakında eklenecek');
  };

  const handleDeleteCategory = (category: Category) => {
    setCategories(prev => removeCategory(prev, category.id));
    toast.success('Kategori başarıyla silindi');
  };

  const handleAddSubcategory = (parentId: string) => {
    setSelectedParentId(parentId);
    setShowForm(true);
  };

  const handleMakeRoot = (category: Category) => {
    setCategories(prev => makeRootCategory(prev, category.id));
    toast.success('Kategori ana kategori yapıldı');
  };

  const handleMakeSub = (categoryId: string, newParentId: string) => {
    setCategories(prev => makeSubCategory(prev, categoryId, newParentId));
    toast.success('Kategori alt kategori yapıldı');
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Ürün Kategorileri</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Yeni Kategori
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {categories.map(category => (
              <CategoryItem
                key={category.id}
                category={category}
                categories={categories}
                onEdit={handleEditCategory}
                onDelete={handleDeleteCategory}
                onAddSubcategory={handleAddSubcategory}
                onMakeRoot={handleMakeRoot}
                onMakeSub={handleMakeSub}
              />
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <CategoryForm
          onSubmit={handleAddCategory}
          onClose={() => {
            setShowForm(false);
            setSelectedParentId(undefined);
          }}
        />
      )}
    </div>
  );
}