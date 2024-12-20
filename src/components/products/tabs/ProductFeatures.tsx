import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Feature {
  id: string;
  group: string;
  name: string;
  value: string;
}

interface ProductFeaturesProps {
  data: any;
  onChange: (data: any) => void;
}

export default function ProductFeatures({ data, onChange }: ProductFeaturesProps) {
  const [features, setFeatures] = useState<Feature[]>(data.features || []);
  const [newFeature, setNewFeature] = useState({
    group: '',
    name: '',
    value: ''
  });

  const addFeature = () => {
    if (!newFeature.group.trim() || !newFeature.name.trim() || !newFeature.value.trim()) {
      return;
    }

    const feature: Feature = {
      id: Date.now().toString(),
      ...newFeature
    };

    const updatedFeatures = [...features, feature];
    setFeatures(updatedFeatures);
    onChange({ features: updatedFeatures });
    setNewFeature({ group: '', name: '', value: '' });
  };

  const removeFeature = (featureId: string) => {
    const updatedFeatures = features.filter(f => f.id !== featureId);
    setFeatures(updatedFeatures);
    onChange({ features: updatedFeatures });
  };

  // Özellikleri gruplara göre düzenle
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.group]) {
      acc[feature.group] = [];
    }
    acc[feature.group].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  return (
    <div className="space-y-6">
      {/* Yeni Özellik Ekleme Formu */}
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          value={newFeature.group}
          onChange={(e) => setNewFeature({ ...newFeature, group: e.target.value })}
          placeholder="Özellik Grubu"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newFeature.name}
          onChange={(e) => setNewFeature({ ...newFeature, name: e.target.value })}
          placeholder="Özellik Adı"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <div className="flex gap-2">
          <input
            type="text"
            value={newFeature.value}
            onChange={(e) => setNewFeature({ ...newFeature, value: e.target.value })}
            placeholder="Özellik Değeri"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={addFeature}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Ekle
          </button>
        </div>
      </div>

      {/* Özellik Grupları */}
      <div className="space-y-6">
        {Object.entries(groupedFeatures).map(([group, groupFeatures]) => (
          <div key={group} className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-lg font-medium mb-4">{group}</h4>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Özellik</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Değer</th>
                  <th className="px-4 py-2 w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {groupFeatures.map(feature => (
                  <tr key={feature.id}>
                    <td className="px-4 py-2">{feature.name}</td>
                    <td className="px-4 py-2">{feature.value}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => removeFeature(feature.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}