import React from 'react';
import { Shield } from 'lucide-react';

interface CertificateSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CertificateSelect({ value, onChange }: CertificateSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Mail Sertifika
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Shield className="h-5 w-5 text-gray-400" />
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
          text-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
        >
          <option value="SSL">SSL</option>
          <option value="TLS">TLS</option>
          <option value="NONE">Sertifikasız</option>
        </select>
      </div>
    </div>
  );
}