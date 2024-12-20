import React from 'react';
import PerPageSelect from './PerPageSelect';
import NumberInput from './NumberInput';

interface LimitSettingRowProps {
  icon: React.ReactNode;
  title: string;
  perPage: number;
  maxRecords: number;
  onPerPageChange: (value: number) => void;
  onMaxRecordsChange: (value: number) => void;
}

export default function LimitSettingRow({
  icon,
  title,
  perPage,
  maxRecords,
  onPerPageChange,
  onMaxRecordsChange
}: LimitSettingRowProps) {
  const perPageOptions = [1, 2, 3, 4, 6];

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50">
      <div className="flex-shrink-0 text-gray-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Yan Yana Gösterim
          </label>
          <PerPageSelect
            value={perPage}
            onChange={onPerPageChange}
            options={perPageOptions}
          />
        </div>
        <div className="w-32">
          <NumberInput
            label="Kayıt Sayısı"
            value={maxRecords}
            onChange={onMaxRecordsChange}
            min={1}
          />
        </div>
      </div>
    </div>
  );
}