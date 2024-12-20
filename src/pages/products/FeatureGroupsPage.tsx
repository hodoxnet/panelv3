import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FeatureGroupList from '../../components/features/FeatureGroupList';
import FeatureGroupForm from '../../components/features/FeatureGroupForm';
import type { FeatureGroup, FeatureGroupFormData } from '../../types/feature';
import toast from 'react-hot-toast';

export default function FeatureGroupsPage() {
  const [groups, setGroups] = useState<FeatureGroup[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddGroup = (data: FeatureGroupFormData) => {
    const newGroup: FeatureGroup = {
      id: Date.now().toString(),
      ...data,
      values: []
    };

    setGroups(prev => [...prev, newGroup]);
    setShowForm(false);
    toast.success('Özellik grubu başarıyla eklendi');
  };

  const handleDeleteGroup = (id: string) => {
    setGroups(prev => prev.filter(g => g.id !== id));
    toast.success('Özellik grubu başarıyla silindi');
  };

  const handleUpdateGroup = (updatedGroup: FeatureGroup) => {
    setGroups(prev => prev.map(g => 
      g.id === updatedGroup.id ? updatedGroup : g
    ));
    toast.success('Özellik grubu başarıyla güncellendi');
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Özellik Grupları</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Yeni Özellik Grubu
          </button>
        </div>

        <div className="p-6">
          <FeatureGroupList
            groups={groups}
            onDelete={handleDeleteGroup}
            onUpdate={handleUpdateGroup}
          />
        </div>
      </div>

      {showForm && (
        <FeatureGroupForm
          onSubmit={handleAddGroup}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}