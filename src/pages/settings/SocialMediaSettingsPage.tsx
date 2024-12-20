import React, { useState } from 'react';
import { Save } from 'lucide-react';
import SocialMediaInput from '../../components/settings/SocialMediaInput';
import toast from 'react-hot-toast';

export default function SocialMediaSettingsPage() {
  const [settings, setSettings] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  });

  const handleSave = () => {
    toast.success('Sosyal medya ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Sosyal Medya Ayarları</h1>
        </div>

        <div className="p-6 space-y-6">
          <SocialMediaInput
            label="Facebook Sayfa URL"
            value={settings.facebook}
            onChange={(value) => setSettings({ ...settings, facebook: value })}
            placeholder="https://facebook.com/sayfaadi"
          />

          <SocialMediaInput
            label="Twitter Sayfa URL"
            value={settings.twitter}
            onChange={(value) => setSettings({ ...settings, twitter: value })}
            placeholder="https://twitter.com/kullaniciadi"
          />

          <SocialMediaInput
            label="Instagram Sayfa URL"
            value={settings.instagram}
            onChange={(value) => setSettings({ ...settings, instagram: value })}
            placeholder="https://instagram.com/kullaniciadi"
          />

          <SocialMediaInput
            label="LinkedIn Sayfa URL"
            value={settings.linkedin}
            onChange={(value) => setSettings({ ...settings, linkedin: value })}
            placeholder="https://linkedin.com/company/sirketadi"
          />

          <SocialMediaInput
            label="Youtube Sayfa URL"
            value={settings.youtube}
            onChange={(value) => setSettings({ ...settings, youtube: value })}
            placeholder="https://youtube.com/@kanaladi"
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