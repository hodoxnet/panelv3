import React, { useState } from 'react';
import { Save } from 'lucide-react';
import ProductBasicInfo from './tabs/ProductBasicInfo';
import ProductVariants from './tabs/ProductVariants';
import ProductFeatures from './tabs/ProductFeatures';
import ProductSeo from './tabs/ProductSeo';
import type { Product } from '../../types/product';

interface ProductFormProps {
  product?: Product;
  onSubmit: (data: any) => void;
}

const tabs = [
  { id: 'basic', label: 'Temel Bilgiler' },
  { id: 'variants', label: 'Varyantlar' },
  { id: 'features', label: 'Özellikler' },
  { id: 'seo', label: 'SEO Ayarları' }
];

export default function ProductForm({ product, onSubmit }: ProductFormProps) {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    title: product?.title || '',
    code: '',
    price: '',
    discountedPrice: '',
    stock: '',
    category: product?.category || '',
    listingImage: '',
    images: [],
    technicalDoc: '',
    eCatalog: '',
    status: product?.status || 'active',
    isNew: product?.isNew || false,
    showOnHomepage: product?.isHomepage || false,
    showFileUpload: false,
    showMessageField: false,
    showDateField: false,
    spotText: '',
    description: '',
    variants: [],
    features: [],
    seoDescription: '',
    seoKeywords: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'basic' && (
          <ProductBasicInfo data={formData} onChange={updateFormData} />
        )}
        {activeTab === 'variants' && (
          <ProductVariants data={formData} onChange={updateFormData} />
        )}
        {activeTab === 'features' && (
          <ProductFeatures data={formData} onChange={updateFormData} />
        )}
        {activeTab === 'seo' && (
          <ProductSeo data={formData} onChange={updateFormData} />
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-6">
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md
          hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          Kaydet
        </button>
      </div>
    </form>
  );
}