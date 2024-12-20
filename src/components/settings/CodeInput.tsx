import React from 'react';

interface CodeInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

export default function CodeInput({ 
  label, 
  value, 
  onChange, 
  placeholder,
  height = "h-32"
}: CodeInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <pre className={`${height} overflow-auto rounded-lg bg-gray-900 p-4 text-sm`}>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="absolute inset-0 w-full h-full bg-transparent text-green-400 font-mono p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            spellCheck="false"
          />
        </pre>
      </div>
    </div>
  );
}