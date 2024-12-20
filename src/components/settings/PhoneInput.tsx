import React from 'react';
import { formatPhoneNumber } from '../../utils/formatters';

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function PhoneInput({ label, value, onChange, placeholder }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange(formatted);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
        focus:ring-blue-500 focus:border-blue-500"
        maxLength={17} // "0 (000) 000 00 00" formatı için
      />
    </div>
  );
}