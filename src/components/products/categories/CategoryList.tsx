import React from 'react';
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
import CategoryItem from './CategoryItem';
import type { Category } from '../../../types/category';

interface CategoryListProps {
  categories: Category[];
  onUpdate: (categories: Category[]) => void;
}

export default function CategoryList({ categories, onUpdate }: CategoryListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = categories.findIndex(cat => cat.id === active.id);
      const newIndex = categories.findIndex(cat => cat.id === over.id);
      
      onUpdate(arrayMove(categories, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={categories.map(cat => cat.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}