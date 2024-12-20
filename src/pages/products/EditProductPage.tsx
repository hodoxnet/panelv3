import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../../components/products/ProductForm';
import toast from 'react-hot-toast';

export default function EditProductPage() {
  const { id } = useParams();

  const handleSubmit = (data: any) => {
    console.log('Güncellenecek veri:', data);
    toast.success('Ürün başarıyla güncellendi!');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Ürün Düzenle</h1>
        </div>

        <div className="p-6">
          <ProductForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}