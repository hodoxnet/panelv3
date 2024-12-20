import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Product, ProductTableColumn } from '../../types/product';

interface ProductsTableProps {
  products: Product[];
  selectedIds: string[];
  onSelectIds: (ids: string[]) => void;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const columns: ProductTableColumn[] = [
  { key: 'title', title: 'Başlık', sortable: true },
  { key: 'category', title: 'Kategori', sortable: true },
  { key: 'isNew', title: 'Yeni Ürün', sortable: true },
  { key: 'isHomepage', title: 'Anasayfa', sortable: true },
  { key: 'status', title: 'Durum', sortable: true },
  { key: 'actions', title: 'İşlem' }
];

export default function ProductsTable({
  products,
  selectedIds,
  onSelectIds,
  onEdit,
  onDelete
}: ProductsTableProps) {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSelectIds(products.map(product => product.id));
    } else {
      onSelectIds([]);
    }
  };

  const handleSelectOne = (productId: string) => {
    if (selectedIds.includes(productId)) {
      onSelectIds(selectedIds.filter(id => id !== productId));
    } else {
      onSelectIds([...selectedIds, productId]);
    }
  };

  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-12 px-3 py-3 sticky left-0 bg-gray-50 z-10">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedIds.length === products.length}
                  onChange={handleSelectAll}
                />
              </div>
            </th>
            {columns.map(column => (
              <th
                key={column.key}
                scope="col"
                className={`px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap ${
                  column.key === 'title' ? 'min-w-[300px]' : 'min-w-[120px]'
                }`}
              >
                <div className="flex items-center gap-1">
                  {column.title}
                  {column.sortable && (
                    <span className="text-gray-400 cursor-pointer">↕</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="w-12 px-3 py-4 sticky left-0 bg-inherit">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedIds.includes(product.id)}
                    onChange={() => handleSelectOne(product.id)}
                  />
                </div>
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {product.title}
              </td>
              <td className="px-3 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  {product.category}
                </span>
              </td>
              <td className="px-3 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  product.isNew ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.isNew ? 'Hayır' : 'Evet'}
                </span>
              </td>
              <td className="px-3 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  product.isHomepage ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.isHomepage ? 'Evet' : 'Hayır'}
                </span>
              </td>
              <td className="px-3 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.status === 'active' ? 'Aktif' : 'Pasif'}
                </span>
              </td>
              <td className="px-3 py-4 whitespace-nowrap">
                <div className="flex space-x-1">
                  <button
                    onClick={() => onEdit(product)}
                    className="p-1 rounded-lg hover:bg-gray-100"
                  >
                    <Edit className="w-5 h-5 text-gray-500" />
                  </button>
                  <button
                    onClick={() => onDelete(product)}
                    className="p-1 rounded-lg hover:bg-gray-100"
                  >
                    <Trash2 className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}