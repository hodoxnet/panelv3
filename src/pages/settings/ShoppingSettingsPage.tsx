import React, { useState } from 'react';
import { Save } from 'lucide-react';
import CurrencySelect from '../../components/settings/CurrencySelect';
import NumberInput from '../../components/settings/NumberInput';
import Toggle from '../../components/settings/Toggle';
import PaymentToggle from '../../components/settings/PaymentToggle';
import toast from 'react-hot-toast';

export default function ShoppingSettingsPage() {
  const [settings, setSettings] = useState({
    currency: 'TRY',
    shippingCost: 0,
    freeShippingLimit: 0,
    vatRate: 18,
    vatIncluded: true,
    onlinePayment: true,
    cashOnDelivery: true,
    cardOnDelivery: true,
    bankTransfer: true
  });

  const handleSave = () => {
    toast.success('Alışveriş ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Alışveriş Ayarları</h1>
        </div>

        <div className="p-6 space-y-8">
          {/* Para Birimi ve Ücretler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencySelect
              value={settings.currency}
              onChange={(value) => setSettings({ ...settings, currency: value })}
            />
            
            <NumberInput
              label="Sabit Kargo Ücreti"
              value={settings.shippingCost}
              onChange={(value) => setSettings({ ...settings, shippingCost: value })}
              min={0}
              suffix="₺"
            />

            <NumberInput
              label="Ücretsiz Kargo Limiti"
              value={settings.freeShippingLimit}
              onChange={(value) => setSettings({ ...settings, freeShippingLimit: value })}
              min={0}
              suffix="₺"
            />

            <NumberInput
              label="KDV Oranı"
              value={settings.vatRate}
              onChange={(value) => setSettings({ ...settings, vatRate: value })}
              min={0}
              max={100}
              suffix="%"
            />
          </div>

          {/* KDV Dahil/Hariç */}
          <div className="pt-2">
            <Toggle
              label="Fiyatlara KDV Dahil"
              checked={settings.vatIncluded}
              onChange={(checked) => setSettings({ ...settings, vatIncluded: checked })}
            />
          </div>

          {/* Ödeme Yöntemleri */}
          <div className="space-y-4 pt-2">
            <h2 className="text-lg font-medium text-gray-800">Ödeme Yöntemleri</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaymentToggle
                label="Kredi Kartı Online Ödeme"
                info="Tahsilat bölümünde Kredi Kartı (Online Ödeme) modülünü kapatıp açabilirsiniz."
                checked={settings.onlinePayment}
                onChange={(checked) => setSettings({ ...settings, onlinePayment: checked })}
              />

              <PaymentToggle
                label="Kapıda Nakit Ödeme"
                info="Tahsilat bölümünde Kapıda Nakit Ödeme modülünü kapatıp açabilirsiniz."
                checked={settings.cashOnDelivery}
                onChange={(checked) => setSettings({ ...settings, cashOnDelivery: checked })}
              />

              <PaymentToggle
                label="Kapıda Kredi Kartı ile Ödeme"
                info="Tahsilat bölümünde Kapıda Kredi Kartı ile Ödeme modülünü kapatıp açabilirsiniz."
                checked={settings.cardOnDelivery}
                onChange={(checked) => setSettings({ ...settings, cardOnDelivery: checked })}
              />

              <PaymentToggle
                label="Banka Havale/EFT"
                info="Tahsilat bölümünde Banka Havale/EFT modülünü kapatıp açabilirsiniz."
                checked={settings.bankTransfer}
                onChange={(checked) => setSettings({ ...settings, bankTransfer: checked })}
              />
            </div>
          </div>
        </div>

        {/* Kaydet Butonu */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end rounded-b-lg">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            Güncelle
          </button>
        </div>
      </div>
    </div>
  );
}