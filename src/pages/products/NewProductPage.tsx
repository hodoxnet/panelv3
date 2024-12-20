import React from 'react';
import ProductForm from '../../components/products/ProductForm';
import toast from 'react-hot-toast';

export default function NewProductPage() {
  const handleSubmit = (data: any) => {
    console.log('Yeni ürün verisi:', data);
    toast.success('Ürün başarıyla eklendi!');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Yeni Ürün Ekle</h1>
        </div>

        <div className="p-6">
          <ProductForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}