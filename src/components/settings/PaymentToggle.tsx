import React from 'react';
import { Info } from 'lucide-react';
import Toggle from './Toggle';

interface PaymentToggleProps {
  label: string;
  info: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PaymentToggle({ label, info, checked, onChange }: PaymentToggleProps) {
  return (
    <div className="flex items-start gap-2">
      <Toggle
        label={label}
        checked={checked}
        onChange={onChange}
      />
      <div className="group relative">
        <Info className="w-4 h-4 text-gray-400 cursor-help" />
        <div className="absolute left-0 bottom-6 hidden group-hover:block w-64 p-2 bg-gray-800 
          text-white text-xs rounded shadow-lg z-10">
          {info}
        </div>
      </div>
    </div>
  );
}