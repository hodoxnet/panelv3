import React from 'react';

interface PerPageSelectProps {
  value: number;
  onChange: (value: number) => void;
  options: number[];
}

export default function PerPageSelect({ value, onChange, options }: PerPageSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
              transition-colors ${
                value === option
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}