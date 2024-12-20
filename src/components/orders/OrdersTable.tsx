import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import type { Order } from '../../types/order';

interface OrdersTableProps {
  orders: Order[];
  selectedIds: string[];
  onSelectIds: (ids: string[]) => void;
  onViewOrder: (order: Order) => void;
  onEditOrder: (order: Order) => void;
  onDeleteOrder: (order: Order) => void;
}

export default function OrdersTable({
  orders,
  selectedIds,
  onSelectIds,
  onViewOrder,
  onEditOrder,
  onDeleteOrder
}: OrdersTableProps) {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSelectIds(orders.map(order => order.id));
    } else {
      onSelectIds([]);
    }
  };

  const handleSelectOne = (orderId: string) => {
    if (selectedIds.includes(orderId)) {
      onSelectIds(selectedIds.filter(id => id !== orderId));
    } else {
      onSelectIds([...selectedIds, orderId]);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-[50px] p-4 sticky left-0 bg-gray-50">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedIds.length === orders.length}
                  onChange={handleSelectAll}
                />
              </div>
            </th>
            <th scope="col" className="w-[140px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Sipariş No
            </th>
            <th scope="col" className="w-[100px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Ürün Sayısı
            </th>
            <th scope="col" className="w-[180px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Müşteri
            </th>
            <th scope="col" className="w-[120px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Ödenen Tutar
            </th>
            <th scope="col" className="w-[140px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Sipariş Durumu
            </th>
            <th scope="col" className="w-[140px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Ödeme Yöntemi
            </th>
            <th scope="col" className="w-[140px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              Ödeme Durumu
            </th>
            <th scope="col" className="w-[120px] px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase">
              İşlem
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="w-[50px] p-4 sticky left-0 bg-white">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedIds.includes(order.id)}
                    onChange={() => handleSelectOne(order.id)}
                  />
                </div>
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {order.id}
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {order.productCount}
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {order.customer}
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {order.amount.toFixed(2)} TL
              </td>
              <td className="px-3 py-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                  Ödeme Bekleniyor
                </span>
              </td>
              <td className="px-3 py-4 text-sm text-gray-900">
                {order.paymentMethod}
              </td>
              <td className="px-3 py-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Ödenmedi
                </span>
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onViewOrder(order)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Eye className="w-5 h-5 text-gray-500" />
                  </button>
                  <button
                    onClick={() => onEditOrder(order)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Pencil className="w-5 h-5 text-gray-500" />
                  </button>
                  <button
                    onClick={() => onDeleteOrder(order)}
                    className="p-1 rounded-full hover:bg-gray-100"
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