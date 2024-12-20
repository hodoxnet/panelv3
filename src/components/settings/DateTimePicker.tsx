import React from 'react';

interface DateTimePickerProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}

export default function DateTimePicker({ label, value, onChange }: DateTimePickerProps) {
  const formatDateTime = (date: Date) => {
    return date.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="datetime-local"
        value={formatDateTime(value)}
        onChange={(e) => onChange(new Date(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
        focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}