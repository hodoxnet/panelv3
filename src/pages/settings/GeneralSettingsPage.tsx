import React, { useState } from 'react';
import { Save } from 'lucide-react';
import LogoUpload from '../../components/settings/LogoUpload';
import ColorPicker from '../../components/settings/ColorPicker';
import TextField from '../../components/settings/TextField';
import toast from 'react-hot-toast';

export default function GeneralSettingsPage() {
  const [settings, setSettings] = useState({
    mainLogo: '',
    footerLogo: '',
    favicon: '',
    color1: '#000000',
    color2: '#000000',
    color3: '#000000',
    siteUrl: '',
    siteTitle: '',
    videoUrl: '',
    keywords: '',
    description: '',
    copyright: ''
  });

  const handleSave = () => {
    toast.success('Ayarlar başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Genel Ayarlar</h1>
        </div>

        <div className="p-6 space-y-8">
          {/* Logo Yükleme Alanları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LogoUpload
              label="Ana Logo"
              id="mainLogo"
              currentLogo={settings.mainLogo}
              onChange={(file) => console.log('Ana logo:', file)}
            />
            <LogoUpload
              label="Footer Logo"
              id="footerLogo"
              currentLogo={settings.footerLogo}
              onChange={(file) => console.log('Footer logo:', file)}
            />
            <LogoUpload
              label="Favicon"
              id="favicon"
              currentLogo={settings.favicon}
              onChange={(file) => console.log('Favicon:', file)}
            />
          </div>

          {/* Renk Seçiciler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorPicker
              label="Renk 1 (Genel Renk)"
              value={settings.color1}
              onChange={(color) => setSettings({ ...settings, color1: color })}
            />
            <ColorPicker
              label="Renk 2"
              value={settings.color2}
              onChange={(color) => setSettings({ ...settings, color2: color })}
            />
            <ColorPicker
              label="Renk 3"
              value={settings.color3}
              onChange={(color) => setSettings({ ...settings, color3: color })}
            />
          </div>

          {/* Metin Alanları */}
          <div className="space-y-6">
            <TextField
              label="Site URL"
              value={settings.siteUrl}
              onChange={(value) => setSettings({ ...settings, siteUrl: value })}
              placeholder="https://example.com"
            />
            <TextField
              label="Site Title"
              value={settings.siteTitle}
              onChange={(value) => setSettings({ ...settings, siteTitle: value })}
              placeholder="Sitenizin başlığı"
            />
            <TextField
              label="Firma Tanıtım Video URL"
              value={settings.videoUrl}
              onChange={(value) => setSettings({ ...settings, videoUrl: value })}
              placeholder="https://youtube.com/watch?v=..."
            />
            <TextField
              label="SEO Kelimeler (Keywords)"
              value={settings.keywords}
              onChange={(value) => setSettings({ ...settings, keywords: value })}
              multiline
              placeholder="anahtar kelime 1, anahtar kelime 2, ..."
            />
            <TextField
              label="SEO Açıklama (Description)"
              value={settings.description}
              onChange={(value) => setSettings({ ...settings, description: value })}
              multiline
              placeholder="Site açıklaması..."
            />
            <TextField
              label="Copyright Metni"
              value={settings.copyright}
              onChange={(value) => setSettings({ ...settings, copyright: value })}
              placeholder="© 2024 Tüm hakları saklıdır."
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