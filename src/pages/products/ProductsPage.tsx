import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import ProductsTable from '../../components/products/ProductsTable';
import ExcelDropdown from '../../components/products/ExcelDropdown';
import ConfirmationModal from '../../components/common/ConfirmationModal';
import type { Product } from '../../types/product';
import toast from 'react-hot-toast';

const mockProducts: Product[] = [
  {
    id: '1',
    title: '205/50R17 93V XL Kormoran All Season',
    category: 'Editörün Seçtikleri',
    isNew: false,
    isHomepage: true,
    status: 'active'
  },
  {
    id: '2',
    title: '235/40R18 95V XL Goodyear Ultragrip Performance G1 M+S FP',
    category: 'Editörün Seçtikleri',
    isNew: false,
    isHomepage: true,
    status: 'active'
  }
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    productId?: string;
    isBulk?: boolean;
  }>({ isOpen: false });

  const handleAddProduct = () => {
    navigate('/dashboard/urunler/yeni');
  };

  const handleBulkAction = () => {
    toast.success('Toplu işlem uygulanıyor...');
  };

  const handleDeleteAll = () => {
    setDeleteConfirmation({
      isOpen: true,
      isBulk: true
    });
  };

  const handleEditProduct = (product: Product) => {
    navigate(`/dashboard/urunler/duzenle/${product.id}`);
  };

  const handleDeleteProduct = (product: Product) => {
    setDeleteConfirmation({
      isOpen: true,
      productId: product.id,
      isBulk: false
    });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation.isBulk) {
      toast.success(`${selectedIds.length} ürün başarıyla silindi!`);
      setSelectedIds([]);
    } else {
      toast.success('Ürün başarıyla silindi!');
    }
    setDeleteConfirmation({ isOpen: false });
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Ürünler</h1>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleAddProduct}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
              >
                <Plus className="w-4 h-4" />
                Yeni Ürün Ekle
              </button>

              <button
                onClick={handleBulkAction}
                disabled={selectedIds.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white rounded-md 
                hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Seçilenlere Uygula</span>
              </button>

              <ExcelDropdown
                selectedIds={selectedIds}
                products={mockProducts}
              />

              <button
                onClick={handleDeleteAll}
                disabled={selectedIds.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md 
                hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 className="w-4 h-4" />
                Tüm Veriyi Sil
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sayfada</span>
              <select className="border border-gray-300 rounded-md text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-500">kayıt göster</span>
            </div>
          </div>

          <ProductsTable
            products={mockProducts}
            selectedIds={selectedIds}
            onSelectIds={setSelectedIds}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              2 kayıttan 1 - 2 arası gösteriliyor
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Önceki</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Sonraki</button>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={deleteConfirmation.isOpen}
        title="Ürünü Sil"
        message={deleteConfirmation.isBulk 
          ? `${selectedIds.length} ürünü silmek istediğinize emin misiniz?`
          : "Bu ürünü silmek istediğinize emin misiniz?"}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirmation({ isOpen: false })}
      />
    </div>
  );
}