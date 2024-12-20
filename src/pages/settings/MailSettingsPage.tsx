import React, { useState } from 'react';
import { Save } from 'lucide-react';
import TextField from '../../components/settings/TextField';
import MailInput from '../../components/settings/MailInput';
import PortInput from '../../components/settings/PortInput';
import CertificateSelect from '../../components/settings/CertificateSelect';
import Toggle from '../../components/settings/Toggle';
import toast from 'react-hot-toast';

export default function MailSettingsPage() {
  const [settings, setSettings] = useState({
    smtpServer: '',
    smtpPort: '',
    certificate: 'SSL',
    smtpEmail: '',
    smtpPassword: '',
    receiverEmail: '',
    isActive: true
  });

  const handleSave = () => {
    toast.success('Mail ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Mail Ayarları</h1>
        </div>

        <div className="p-6 space-y-6">
          <TextField
            label="SMTP Server"
            value={settings.smtpServer}
            onChange={(value) => setSettings({ ...settings, smtpServer: value })}
            placeholder="smtp.example.com"
          />

          <PortInput
            label="SMTP Port"
            value={settings.smtpPort}
            onChange={(value) => setSettings({ ...settings, smtpPort: value })}
          />

          <CertificateSelect
            value={settings.certificate}
            onChange={(value) => setSettings({ ...settings, certificate: value })}
          />

          <MailInput
            label="SMTP Email"
            value={settings.smtpEmail}
            onChange={(value) => setSettings({ ...settings, smtpEmail: value })}
            placeholder="mail@example.com"
          />

          <TextField
            label="SMTP Email Şifre"
            value={settings.smtpPassword}
            onChange={(value) => setSettings({ ...settings, smtpPassword: value })}
            placeholder="••••••••"
          />

          <MailInput
            label="Mesajın Geleceği E-Posta Adresi"
            value={settings.receiverEmail}
            onChange={(value) => setSettings({ ...settings, receiverEmail: value })}
            placeholder="receiver@example.com"
          />

          <Toggle
            label="Mail Gönderimi"
            checked={settings.isActive}
            onChange={(checked) => setSettings({ ...settings, isActive: checked })}
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