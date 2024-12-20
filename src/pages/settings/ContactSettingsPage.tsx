import React, { useState } from 'react';
import { Save } from 'lucide-react';
import TextField from '../../components/settings/TextField';
import PhoneInput from '../../components/settings/PhoneInput';
import toast from 'react-hot-toast';

export default function ContactSettingsPage() {
  const [settings, setSettings] = useState({
    companyName: '',
    phone: '',
    fax: '',
    email: '',
    address: ''
  });

  const handleSave = () => {
    toast.success('İletişim ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">İletişim Ayarları</h1>
        </div>

        <div className="p-6 space-y-6">
          <TextField
            label="Firma Ünvanı"
            value={settings.companyName}
            onChange={(value) => setSettings({ ...settings, companyName: value })}
            placeholder="Örn: ABC Teknoloji Ltd. Şti."
          />

          <PhoneInput
            label="Firma Telefon"
            value={settings.phone}
            onChange={(value) => setSettings({ ...settings, phone: value })}
            placeholder="0 (500) 000 00 00"
          />

          <PhoneInput
            label="Firma Fax"
            value={settings.fax}
            onChange={(value) => setSettings({ ...settings, fax: value })}
            placeholder="0 (500) 000 00 00"
          />

          <TextField
            label="Firma E-Mail"
            value={settings.email}
            onChange={(value) => setSettings({ ...settings, email: value })}
            placeholder="ornek@firma.com"
          />

          <TextField
            label="Firma Adres"
            value={settings.address}
            onChange={(value) => setSettings({ ...settings, address: value })}
            multiline
            placeholder="Firma açık adresi..."
          />
        </div>

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