import React from 'react';

interface PortInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function PortInput({ label, value, onChange }: PortInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, '');
    if (parseInt(newValue) <= 65535 || newValue === '') {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="25"
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
        focus:ring-blue-500 focus:border-blue-500"
        maxLength={5}
      />
    </div>
  );
}