import React from 'react';

interface CategorySelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

// Bu kategoriler örnek olarak eklenmiştir
const categories = [
  { id: '1', name: 'Editörün Seçtikleri' },
  { id: '2', name: 'Yeni Ürünler' },
  { id: '3', name: 'İndirimdekiler' }
];

export default function CategorySelect({
  label,
  value,
  onChange,
  required
}: CategorySelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm
        focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Kategori Seçin</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}