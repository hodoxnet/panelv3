import React, { useState } from 'react';
import OrdersTable from '../../components/orders/OrdersTable';
import OrderDetailModal from '../../components/orders/OrderDetailModal';
import OrderEditModal from '../../components/orders/OrderEditModal';
import BulkActions from '../../components/orders/BulkActions';
import ConfirmationModal from '../../components/common/ConfirmationModal';
import type { Order } from '../../types/order';
import toast from 'react-hot-toast';

const mockOrders: Order[] = [
  {
    id: '1734272420',
    productCount: 1,
    customer: 'Test',
    amount: 2162.00,
    orderStatus: 'pending',
    paymentMethod: 'Banka Havale/EFT',
    paymentStatus: 'unpaid',
    orderDate: '15 Aralık 2024, 17:20',
    customerType: 'Bireysel',
    phone: '0(551) 654 16 05',
    email: 'test@test.com',
    taxId: '16161616616',
    city: 'Adana',
    district: 'İmamoğlu',
    address: 'Test',
    orderNote: 'Test',
    products: [
      {
        id: 1,
        name: '205/50R17 93V XL Kormoran All Season',
        unitPrice: 2162.00,
        quantity: 1,
        total: 2162.00
      }
    ]
  },
  // Add more mock orders with different statuses
  {
    id: '1734272421',
    productCount: 2,
    customer: 'Test 2',
    amount: 4324.00,
    orderStatus: 'completed',
    paymentMethod: 'Kredi Kartı',
    paymentStatus: 'paid',
    orderDate: '14 Aralık 2024, 15:30',
    customerType: 'Kurumsal',
    phone: '0(552) 654 16 05',
    email: 'test2@test.com',
    taxId: '16161616617',
    city: 'İstanbul',
    district: 'Kadıköy',
    address: 'Test 2',
    orderNote: 'Test 2',
    products: [
      {
        id: 2,
        name: '215/55R17 94V Michelin Primacy 4',
        unitPrice: 2162.00,
        quantity: 2,
        total: 4324.00
      }
    ]
  }
];

export default function AllOrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    orderId?: string;
    isBulk?: boolean;
  }>({ isOpen: false });

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder(order);
  };

  const handleUpdateOrder = (updatedOrder: Order) => {
    // Update order logic here
    toast.success('Sipariş başarıyla güncellendi!');
    setEditingOrder(null);
  };

  const handleDeleteOrder = (order: Order) => {
    setDeleteConfirmation({
      isOpen: true,
      orderId: order.id,
      isBulk: false
    });
  };

  const handleBulkDelete = () => {
    setDeleteConfirmation({
      isOpen: true,
      isBulk: true
    });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation.isBulk) {
      // Bulk delete logic here
      toast.success(`${selectedIds.length} sipariş başarıyla silindi!`);
      setSelectedIds([]);
    } else {
      // Single delete logic here
      toast.success('Sipariş başarıyla silindi!');
    }
    setDeleteConfirmation({ isOpen: false });
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Tüm Siparişler</h1>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-4">
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

            <div className="flex items-center gap-4">
              <BulkActions 
                selectedIds={selectedIds}
                onDelete={handleBulkDelete}
              />
              <input
                type="search"
                placeholder="Ara..."
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              />
            </div>
          </div>

          <OrdersTable
            orders={mockOrders}
            selectedIds={selectedIds}
            onSelectIds={setSelectedIds}
            onViewOrder={handleViewOrder}
            onEditOrder={handleEditOrder}
            onDeleteOrder={handleDeleteOrder}
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

      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

      {editingOrder && (
        <OrderEditModal
          order={editingOrder}
          onClose={() => setEditingOrder(null)}
          onSave={handleUpdateOrder}
        />
      )}

      <ConfirmationModal
        isOpen={deleteConfirmation.isOpen}
        title="Siparişi Sil"
        message={deleteConfirmation.isBulk 
          ? `${selectedIds.length} siparişi silmek istediğinize emin misiniz?`
          : "Bu siparişi silmek istediğinize emin misiniz?"}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirmation({ isOpen: false })}
      />
    </div>
  );
}