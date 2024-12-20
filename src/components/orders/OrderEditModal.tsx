import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Order } from '../../types/order';

interface OrderEditModalProps {
  order: Order;
  onClose: () => void;
  onSave: (updatedOrder: Order) => void;
}

export default function OrderEditModal({ order, onClose, onSave }: OrderEditModalProps) {
  const [formData, setFormData] = useState({
    orderStatus: order.orderStatus,
    paymentStatus: order.paymentStatus,
    shippingCompany: '',
    trackingNumber: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...order,
      orderStatus: formData.orderStatus,
      paymentStatus: formData.paymentStatus
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Siparişi Düzenle</h3>
              <p className="text-sm text-gray-500">
                IP Adresi: {order.id} - Sipariş Tarihi: {order.orderDate}
              </p>
            </div>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Sipariş Durumu</label>
              <select
                value={formData.orderStatus}
                onChange={(e) => setFormData({ ...formData, orderStatus: e.target.value as Order['orderStatus'] })}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
              >
                <option value="pending">Ödeme Bekleniyor</option>
                <option value="completed">Tamamlandı</option>
                <option value="cancelled">İptal Edildi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ödeme Durumu</label>
              <select
                value={formData.paymentStatus}
                onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value as Order['paymentStatus'] })}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
              >
                <option value="unpaid">Ödenmedi</option>
                <option value="paid">Ödendi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kargo Firması</label>
              <select
                value={formData.shippingCompany}
                onChange={(e) => setFormData({ ...formData, shippingCompany: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
              >
                <option value="">Seçilmedi</option>
                <option value="aras">Aras Kargo</option>
                <option value="yurtici">Yurtiçi Kargo</option>
                <option value="mng">MNG Kargo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kargo Takip No</label>
              <input
                type="text"
                value={formData.trackingNumber}
                onChange={(e) => setFormData({ ...formData, trackingNumber: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                placeholder="Kargo takip numarası"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Açıklama</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                placeholder="Sipariş ile ilgili notlar..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Kapat
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}