import React from 'react';
import { Check } from 'lucide-react';

interface ModuleToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export default function ModuleToggle({ title, description, enabled, onChange }: ModuleToggleProps) {
  return (
    <div className="flex items-start justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 pt-0.5">
          <Check className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}