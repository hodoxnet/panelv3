import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import FeatureValueForm from './FeatureValueForm';
import type { FeatureGroup, FeatureValue } from '../../types/feature';

interface FeatureGroupListProps {
  groups: FeatureGroup[];
  onDelete: (id: string) => void;
  onUpdate: (group: FeatureGroup) => void;
}

export default function FeatureGroupList({ groups, onDelete, onUpdate }: FeatureGroupListProps) {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const handleAddValue = (groupId: string, name: string) => {
    const group = groups.find(g => g.id === groupId);
    if (!group) return;

    const newValue: FeatureValue = {
      id: Date.now().toString(),
      name
    };

    onUpdate({
      ...group,
      values: [...group.values, newValue]
    });
  };

  const handleDeleteValue = (groupId: string, valueId: string) => {
    const group = groups.find(g => g.id === groupId);
    if (!group) return;

    onUpdate({
      ...group,
      values: group.values.filter(v => v.id !== valueId)
    });
  };

  return (
    <div className="space-y-6">
      {groups.map(group => (
        <div key={group.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">{group.name}</h3>
              <span className={`text-sm ${group.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {group.isActive ? 'Aktif' : 'Pasif'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedGroup(group.id)}
                className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(group.id)}
                className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Özellik Değerleri Tablosu */}
          {group.values.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Değer</th>
                    <th className="px-4 py-2 w-16"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {group.values.map(value => (
                    <tr key={value.id}>
                      <td className="px-4 py-2">{value.name}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteValue(group.id, value.id)}
                          className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedGroup === group.id && (
            <FeatureValueForm
              onSubmit={(name) => handleAddValue(group.id, name)}
              onClose={() => setSelectedGroup(null)}
            />
          )}
        </div>
      ))}

      {groups.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Henüz özellik grubu eklenmemiş
        </div>
      )}
    </div>
  );
}