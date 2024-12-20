import React from 'react';

interface ProductSeoProps {
  data: any;
  onChange: (data: any) => void;
}

export default function ProductSeo({ data, onChange }: ProductSeoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          SEO Açıklama (Description)
        </label>
        <textarea
          value={data.seoDescription}
          onChange={(e) => onChange({ seoDescription: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Ürün için SEO açıklaması..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          SEO Kelimeler (Keywords)
        </label>
        <textarea
          value={data.seoKeywords}
          onChange={(e) => onChange({ seoKeywords: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="anahtar kelime 1, anahtar kelime 2, ..."
        />
        <p className="mt-1 text-sm text-gray-500">
          Her kelimenin sonuna virgül koyunuz
        </p>
      </div>
    </div>
  );
}