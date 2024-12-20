import React from 'react';
import { X } from 'lucide-react';
import type { Order, OrderSummary } from '../../types/order';

interface OrderDetailModalProps {
  order: Order;
  onClose: () => void;
}

export default function OrderDetailModal({ order, onClose }: OrderDetailModalProps) {
  const summary: OrderSummary = {
    subtotal: order.products.reduce((sum, product) => sum + product.total, 0),
    discount: 0,
    shipping: 0,
    tax: order.products.reduce((sum, product) => sum + (product.total * 0.18), 0),
    total: order.amount
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Sipariş Detayı</h3>
              <p className="text-sm text-gray-500">Sipariş No: {order.id}</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="px-6 py-4 grid grid-cols-2 gap-8">
            {/* Customer Information */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Fatura ve Teslimat Bilgileri</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Müşteri:</span> {order.customer}</p>
                <p><span className="text-gray-500">Üye Tipi:</span> {order.customerType}</p>
                <p><span className="text-gray-500">Telefon:</span> {order.phone}</p>
                <p><span className="text-gray-500">E-Posta:</span> {order.email}</p>
                <p><span className="text-gray-500">T.C. No:</span> {order.taxId}</p>
                <p><span className="text-gray-500">İl/İlçe:</span> {order.city} / {order.district}</p>
                <p><span className="text-gray-500">Adres:</span> {order.address}</p>
              </div>
            </div>

            {/* Order Information */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Sipariş Bilgileri</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Sipariş Tarihi:</span> {order.orderDate}</p>
                <p><span className="text-gray-500">Sipariş Durumu:</span> 
                  <span className="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Ödeme Bekleniyor
                  </span>
                </p>
                <p><span className="text-gray-500">Ödeme Durumu:</span>
                  <span className="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Ödenmedi
                  </span>
                </p>
                <p><span className="text-gray-500">Ödeme Şekli:</span> {order.paymentMethod}</p>
                <p><span className="text-gray-500">Sipariş Notu:</span> {order.orderNote}</p>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="px-6 py-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ürün</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Birim Fiyat</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Adet</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Toplam</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {product.unitPrice.toFixed(2)} TL
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{product.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {product.total.toFixed(2)} TL
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="w-64 ml-auto space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Ara Toplam:</span>
                <span className="text-gray-900">{summary.subtotal.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">İndirim:</span>
                <span className="text-gray-900">{summary.discount.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Kargo:</span>
                <span className="text-gray-900">{summary.shipping.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">KDV:</span>
                <span className="text-gray-900">{summary.tax.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-2 border-t border-gray-200">
                <span className="text-gray-900">Genel Toplam:</span>
                <span className="text-gray-900">{summary.total.toFixed(2)} TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}