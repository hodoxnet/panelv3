import React from 'react';

interface NumberInputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  suffix?: string;
  min?: number;
  max?: number;
  required?: boolean;
}

export default function NumberInput({
  label,
  value,
  onChange,
  suffix,
  min,
  max,
  required
}: NumberInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm
          focus:ring-blue-500 focus:border-blue-500"
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-500">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
}