import React, { useState } from 'react';
import { Save, FileText, Users, Star, Box, FolderKanban, Package, Camera, Image } from 'lucide-react';
import LimitSettingRow from '../../components/settings/LimitSettingRow';
import toast from 'react-hot-toast';

interface LimitSettings {
  [key: string]: {
    perPage: number;
    maxRecords: number;
  };
}

export default function LimitSettingsPage() {
  const [settings, setSettings] = useState<LimitSettings>({
    documents: { perPage: 4, maxRecords: 12 },
    team: { perPage: 4, maxRecords: 12 },
    references: { perPage: 4, maxRecords: 12 },
    productCategories: { perPage: 4, maxRecords: 12 },
    products: { perPage: 3, maxRecords: 12 },
    projectCategories: { perPage: 3, maxRecords: 12 },
    projects: { perPage: 3, maxRecords: 12 },
    photoGallery: { perPage: 3, maxRecords: 12 }
  });

  const updateSetting = (key: string, field: 'perPage' | 'maxRecords', value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    toast.success('Limit ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Limit Ayarları</h1>
        </div>

        <div className="divide-y divide-gray-200">
          <LimitSettingRow
            icon={<FileText className="w-5 h-5" />}
            title="Belgelerimiz"
            perPage={settings.documents.perPage}
            maxRecords={settings.documents.maxRecords}
            onPerPageChange={(value) => updateSetting('documents', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('documents', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Users className="w-5 h-5" />}
            title="Ekibimiz"
            perPage={settings.team.perPage}
            maxRecords={settings.team.maxRecords}
            onPerPageChange={(value) => updateSetting('team', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('team', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Star className="w-5 h-5" />}
            title="Referanslar"
            perPage={settings.references.perPage}
            maxRecords={settings.references.maxRecords}
            onPerPageChange={(value) => updateSetting('references', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('references', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Box className="w-5 h-5" />}
            title="Ürün Kategori"
            perPage={settings.productCategories.perPage}
            maxRecords={settings.productCategories.maxRecords}
            onPerPageChange={(value) => updateSetting('productCategories', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('productCategories', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Package className="w-5 h-5" />}
            title="Ürünler"
            perPage={settings.products.perPage}
            maxRecords={settings.products.maxRecords}
            onPerPageChange={(value) => updateSetting('products', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('products', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<FolderKanban className="w-5 h-5" />}
            title="Proje Kategori"
            perPage={settings.projectCategories.perPage}
            maxRecords={settings.projectCategories.maxRecords}
            onPerPageChange={(value) => updateSetting('projectCategories', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('projectCategories', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Image className="w-5 h-5" />}
            title="Projeler"
            perPage={settings.projects.perPage}
            maxRecords={settings.projects.maxRecords}
            onPerPageChange={(value) => updateSetting('projects', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('projects', 'maxRecords', value)}
          />
          <LimitSettingRow
            icon={<Camera className="w-5 h-5" />}
            title="Foto Galeri"
            perPage={settings.photoGallery.perPage}
            maxRecords={settings.photoGallery.maxRecords}
            onPerPageChange={(value) => updateSetting('photoGallery', 'perPage', value)}
            onMaxRecordsChange={(value) => updateSetting('photoGallery', 'maxRecords', value)}
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