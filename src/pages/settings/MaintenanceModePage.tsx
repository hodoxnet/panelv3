import React, { useState } from 'react';
import { Save } from 'lucide-react';
import DateTimePicker from '../../components/settings/DateTimePicker';
import TextField from '../../components/settings/TextField';
import Toggle from '../../components/settings/Toggle';
import toast from 'react-hot-toast';

export default function MaintenanceModePage() {
  const [settings, setSettings] = useState({
    enabled: false,
    openingDate: new Date(),
    title: '',
    description: ''
  });

  const handleSave = () => {
    toast.success('Bakım modu ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Site Bakım Modu</h1>
        </div>

        <div className="p-6 space-y-6">
          <Toggle
            label="Bakım Modunu Aktifleştir"
            checked={settings.enabled}
            onChange={(checked) => setSettings({ ...settings, enabled: checked })}
          />

          <DateTimePicker
            label="Site Açılış Tarihi ve Saati"
            value={settings.openingDate}
            onChange={(date) => setSettings({ ...settings, openingDate: date || new Date() })}
          />

          <TextField
            label="Başlık"
            value={settings.title}
            onChange={(value) => setSettings({ ...settings, title: value })}
            placeholder="Örn: Bakım Çalışması"
          />

          <TextField
            label="Açıklama"
            value={settings.description}
            onChange={(value) => setSettings({ ...settings, description: value })}
            multiline
            placeholder="Bakım çalışması hakkında bilgilendirme mesajı..."
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