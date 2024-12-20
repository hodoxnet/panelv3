import React, { useState } from 'react';
import { Save } from 'lucide-react';
import ImageUpload from '../../components/settings/ImageUpload';
import TextField from '../../components/settings/TextField';
import Toggle from '../../components/settings/Toggle';
import toast from 'react-hot-toast';

export default function PopupMessagePage() {
  const [settings, setSettings] = useState({
    image: '',
    name: '',
    url: '',
    openInNewTab: true,
    isActive: true
  });

  const handleSave = () => {
    toast.success('Açılır mesaj ayarları güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Açılır Mesaj Ayarları</h1>
        </div>

        <div className="p-6 space-y-8">
          {/* Resim Yükleme */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mesaj Görseli
            </label>
            <ImageUpload
              currentImage={settings.image}
              onChange={(file) => console.log('Seçilen dosya:', file)}
            />
          </div>

          {/* Metin Alanları */}
          <TextField
            label="Mesaj Adı"
            value={settings.name}
            onChange={(value) => setSettings({ ...settings, name: value })}
            placeholder="Örn: Yeni Yıl Kampanyası"
          />

          <TextField
            label="Mesaj URL"
            value={settings.url}
            onChange={(value) => setSettings({ ...settings, url: value })}
            placeholder="https://example.com/kampanya"
          />

          {/* Toggle Seçenekleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <Toggle
              label="Yeni sekmede aç"
              checked={settings.openInNewTab}
              onChange={(checked) => setSettings({ ...settings, openInNewTab: checked })}
            />

            <Toggle
              label="Aktif"
              checked={settings.isActive}
              onChange={(checked) => setSettings({ ...settings, isActive: checked })}
            />
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