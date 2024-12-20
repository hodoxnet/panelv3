import React, { useState, useEffect } from 'react';
import { Plus, X, DollarSign } from 'lucide-react';

interface Variant {
  id: string;
  name: string;
  options: string[];
}

interface VariantCombination {
  id: string;
  combination: Record<string, string>;
  price: string;
  stock: string;
}

interface ProductVariantsProps {
  data: any;
  onChange: (data: any) => void;
}

export default function ProductVariants({ data, onChange }: ProductVariantsProps) {
  const [variants, setVariants] = useState<Variant[]>(data.variants || []);
  const [combinations, setCombinations] = useState<VariantCombination[]>(data.combinations || []);
  const [newVariantName, setNewVariantName] = useState('');
  const [newOptionValue, setNewOptionValue] = useState('');
  const [showPricing, setShowPricing] = useState(false);

  // Varyant kombinasyonlarını oluştur
  useEffect(() => {
    if (variants.length === 0) {
      setCombinations([]);
      return;
    }

    // Mevcut kombinasyonları koru
    const existingCombinations = new Map(
      combinations.map(c => [JSON.stringify(c.combination), c])
    );

    // Tüm olası kombinasyonları oluştur
    const generateCombinations = (
      current: Record<string, string> = {},
      variantIndex: number = 0
    ): VariantCombination[] => {
      if (variantIndex === variants.length) {
        const key = JSON.stringify(current);
        const existing = existingCombinations.get(key);
        return [{
          id: existing?.id || Date.now().toString() + Math.random(),
          combination: { ...current },
          price: existing?.price || '',
          stock: existing?.stock || ''
        }];
      }

      const variant = variants[variantIndex];
      const result: VariantCombination[] = [];

      variant.options.forEach(option => {
        const newCurrent = {
          ...current,
          [variant.name]: option
        };
        result.push(...generateCombinations(newCurrent, variantIndex + 1));
      });

      return result;
    };

    const newCombinations = generateCombinations();
    setCombinations(newCombinations);
    onChange({ variants, combinations: newCombinations });
  }, [variants]);

  const addVariant = () => {
    if (!newVariantName.trim()) return;

    const newVariant: Variant = {
      id: Date.now().toString(),
      name: newVariantName,
      options: []
    };

    const updatedVariants = [...variants, newVariant];
    setVariants(updatedVariants);
    setNewVariantName('');
  };

  const removeVariant = (variantId: string) => {
    const updatedVariants = variants.filter(v => v.id !== variantId);
    setVariants(updatedVariants);
  };

  const addOption = (variantId: string) => {
    if (!newOptionValue.trim()) return;

    const updatedVariants = variants.map(variant => {
      if (variant.id === variantId) {
        return {
          ...variant,
          options: [...variant.options, newOptionValue]
        };
      }
      return variant;
    });

    setVariants(updatedVariants);
    setNewOptionValue('');
  };

  const removeOption = (variantId: string, optionIndex: number) => {
    const updatedVariants = variants.map(variant => {
      if (variant.id === variantId) {
        return {
          ...variant,
          options: variant.options.filter((_, index) => index !== optionIndex)
        };
      }
      return variant;
    });

    setVariants(updatedVariants);
  };

  const updateCombination = (id: string, field: 'price' | 'stock', value: string) => {
    const updatedCombinations = combinations.map(c => {
      if (c.id === id) {
        return { ...c, [field]: value };
      }
      return c;
    });
    setCombinations(updatedCombinations);
    onChange({ variants, combinations: updatedCombinations });
  };

  return (
    <div className="space-y-6">
      {/* Yeni Varyant Ekleme */}
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={newVariantName}
            onChange={(e) => setNewVariantName(e.target.value)}
            placeholder="Yeni varyant adı (örn: Renk, Beden)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={addVariant}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Varyant Ekle
        </button>
      </div>

      {/* Varyant Listesi */}
      <div className="space-y-4">
        {variants.map(variant => (
          <div key={variant.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium">{variant.name}</h4>
              <button
                onClick={() => removeVariant(variant.id)}
                className="p-1 text-red-500 hover:bg-red-50 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Seçenek Ekleme */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newOptionValue}
                onChange={(e) => setNewOptionValue(e.target.value)}
                placeholder="Yeni seçenek değeri"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => addOption(variant.id)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Ekle
              </button>
            </div>

            {/* Seçenek Listesi */}
            <div className="flex flex-wrap gap-2">
              {variant.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full"
                >
                  <span>{option}</span>
                  <button
                    onClick={() => removeOption(variant.id, index)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Varyant Kombinasyonları ve Fiyatlandırma */}
      {variants.length > 0 && combinations.length > 0 && (
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium">Varyant Fiyatlandırma</h4>
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <DollarSign className="w-4 h-4" />
              {showPricing ? 'Gizle' : 'Göster'}
            </button>
          </div>

          {showPricing && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {variants.map(variant => (
                      <th
                        key={variant.id}
                        className="px-4 py-2 text-left text-sm font-medium text-gray-500"
                      >
                        {variant.name}
                      </th>
                    ))}
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Fiyat</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Stok</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {combinations.map(combination => (
                    <tr key={combination.id}>
                      {variants.map(variant => (
                        <td key={variant.id} className="px-4 py-2">
                          {combination.combination[variant.name]}
                        </td>
                      ))}
                      <td className="px-4 py-2">
                        <div className="flex items-center">
                          <input
                            type="number"
                            value={combination.price}
                            onChange={(e) => updateCombination(combination.id, 'price', e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                            placeholder="0.00"
                          />
                          <span className="ml-2">₺</span>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={combination.stock}
                          onChange={(e) => updateCombination(combination.id, 'stock', e.target.value)}
                          className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}