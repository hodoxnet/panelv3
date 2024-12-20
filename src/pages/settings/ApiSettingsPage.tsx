import React, { useState } from 'react';
import { Save } from 'lucide-react';
import CodeInput from '../../components/settings/CodeInput';
import toast from 'react-hot-toast';

export default function ApiSettingsPage() {
  const [settings, setSettings] = useState({
    whatsappCode: '',
    analyticsCode: '',
    webmasterCode: '',
    mapEmbedCode: '',
    liveChatCode: '',
    recaptchaCode: ''
  });

  const handleSave = () => {
    toast.success('API ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">API Ayarları</h1>
        </div>

        <div className="p-6 space-y-8">
          <CodeInput
            label="WhatsApp Kodu"
            value={settings.whatsappCode}
            onChange={(value) => setSettings({ ...settings, whatsappCode: value })}
            placeholder='<div class="whatsapp">...'
          />

          <CodeInput
            label="Google Analytics .js Kodu"
            value={settings.analyticsCode}
            onChange={(value) => setSettings({ ...settings, analyticsCode: value })}
            placeholder="<!-- Global site tag (gtag.js) - Google Analytics -->"
          />

          <CodeInput
            label="Webmaster Tools Site Doğrulama Kodu"
            value={settings.webmasterCode}
            onChange={(value) => setSettings({ ...settings, webmasterCode: value })}
            placeholder="<meta name='google-site-verification' content='...' />"
          />

          <CodeInput
            label="İletişim Harita Embed Kodu"
            value={settings.mapEmbedCode}
            onChange={(value) => setSettings({ ...settings, mapEmbedCode: value })}
            placeholder="<iframe src='https://www.google.com/maps/embed?...'></iframe>"
            height="h-40"
          />

          <CodeInput
            label="Canlı Destek Kodu"
            value={settings.liveChatCode}
            onChange={(value) => setSettings({ ...settings, liveChatCode: value })}
            placeholder="<!-- Live Chat Code -->"
          />

          <CodeInput
            label="Google ReCaptcha Site Anahtar Kodu"
            value={settings.recaptchaCode}
            onChange={(value) => setSettings({ ...settings, recaptchaCode: value })}
            placeholder="<script src='https://www.google.com/recaptcha/api.js'></script>"
          />
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