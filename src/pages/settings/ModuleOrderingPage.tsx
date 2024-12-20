import React, { useState } from 'react';
import { Save } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import DraggableModule from '../../components/settings/DraggableModule';
import toast from 'react-hot-toast';

interface Module {
  id: string;
  title: string;
  description: string;
}

export default function ModuleOrderingPage() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 'slider',
      title: 'Slider',
      description: 'Ana sayfa slider modülü'
    },
    {
      id: 'about',
      title: 'Hakkımızda',
      description: 'Firma hakkında bilgi alanı'
    },
    {
      id: 'services',
      title: 'Hizmetlerimiz',
      description: 'Sunulan hizmetler listesi'
    },
    {
      id: 'products',
      title: 'Ürünlerimiz',
      description: 'Öne çıkan ürünler vitrini'
    },
    {
      id: 'projects',
      title: 'Projelerimiz',
      description: 'Tamamlanan projeler galerisi'
    },
    {
      id: 'testimonials',
      title: 'Müşteri Yorumları',
      description: 'Müşteri geri bildirimleri'
    },
    {
      id: 'contact',
      title: 'İletişim',
      description: 'İletişim bilgileri ve form'
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setModules((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSave = () => {
    toast.success('Modül sıralaması başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Anasayfa Modül Sıralama</h1>
          <p className="mt-1 text-sm text-gray-500">
            Modülleri sürükleyerek sıralayabilirsiniz. Yapılan değişiklikler anasayfadaki görünüm sırasını etkileyecektir.
          </p>
        </div>

        <div className="p-6">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={modules.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {modules.map((module) => (
                  <DraggableModule
                    key={module.id}
                    id={module.id}
                    title={module.title}
                    description={module.description}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
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