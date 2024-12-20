import React from 'react';
import { Info } from 'lucide-react';
import TextField from '../../common/TextField';
import NumberInput from '../../common/NumberInput';
import CategorySelect from '../../common/CategorySelect';
import ImageUpload from '../../common/ImageUpload';
import FileUpload from '../../common/FileUpload';
import Toggle from '../../common/Toggle';

interface ProductBasicInfoProps {
  data: any;
  onChange: (data: any) => void;
}

export default function ProductBasicInfo({ data, onChange }: ProductBasicInfoProps) {
  return (
    <div className="space-y-8">
      {/* Temel Bilgiler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label="Başlık"
          value={data.title}
          onChange={(value) => onChange({ title: value })}
          required
        />
        <TextField
          label="Ürün Kodu"
          value={data.code}
          onChange={(value) => onChange({ code: value })}
          required
        />
      </div>

      {/* Fiyat ve Stok Bilgileri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NumberInput
          label="Fiyat"
          value={data.price}
          onChange={(value) => onChange({ price: value })}
          suffix="₺"
          required
        />
        <NumberInput
          label="İndirimli Fiyat"
          value={data.discountedPrice}
          onChange={(value) => onChange({ discountedPrice: value })}
          suffix="₺"
        />
        <NumberInput
          label="Stok"
          value={data.stock}
          onChange={(value) => onChange({ stock: value })}
          required
        />
      </div>

      {/* Kategori */}
      <CategorySelect
        label="Kategori"
        value={data.category}
        onChange={(value) => onChange({ category: value })}
        required
      />

      {/* Görseller */}
      <div className="space-y-6">
        <ImageUpload
          label="Listeleme Görseli"
          value={data.listingImage}
          onChange={(file) => onChange({ listingImage: file })}
          required
        />
        <ImageUpload
          label="Fotoğraflar"
          multiple
          value={data.images}
          onChange={(files) => onChange({ images: files })}
        />
      </div>

      {/* Dökümanlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUpload
          label="Teknik Döküman"
          value={data.technicalDoc}
          onChange={(file) => onChange({ technicalDoc: file })}
          accept=".pdf,.doc,.docx"
        />
        <FileUpload
          label="E-Katalog"
          value={data.eCatalog}
          onChange={(file) => onChange({ eCatalog: file })}
          accept=".pdf"
        />
      </div>

      {/* Durum Ayarları */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Durum Ayarları</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {/* Sol Grup */}
          <div className="space-y-4">
            <Toggle
              label="Durum (Aktif/Pasif)"
              checked={data.status === 'active'}
              onChange={(checked) => onChange({ status: checked ? 'active' : 'inactive' })}
            />
            <Toggle
              label="Yeni Ürün"
              checked={data.isNew}
              onChange={(checked) => onChange({ isNew: checked })}
            />
            <Toggle
              label="Anasayfada Göster"
              checked={data.showOnHomepage}
              onChange={(checked) => onChange({ showOnHomepage: checked })}
            />
          </div>
          
          {/* Sağ Grup */}
          <div className="space-y-4">
            <Toggle
              label="Dosya Yükleme Alanı"
              checked={data.showFileUpload}
              onChange={(checked) => onChange({ showFileUpload: checked })}
            />
            <Toggle
              label="Mesaj/Not Alanı"
              checked={data.showMessageField}
              onChange={(checked) => onChange({ showMessageField: checked })}
            />
            <Toggle
              label="Tarih Alanı"
              checked={data.showDateField}
              onChange={(checked) => onChange({ showDateField: checked })}
            />
          </div>
        </div>
      </div>

      {/* Spot Metin */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Spot Metin
          </label>
          <div className="group relative">
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
            <div className="absolute left-0 bottom-6 hidden group-hover:block w-72 p-3 bg-gray-800 
              text-white text-xs rounded-lg shadow-lg z-10 leading-relaxed">
              Spot metin, içeriğinizi özetleyen bir ya da iki cümlelik metindir. 
              180 karakteri geçmemesi gerekmektedir. Spot metinde tamamen BÜYÜK 
              harften kaçınmalı ve çift tırnak kullanılmamalıdır.
            </div>
          </div>
        </div>
        <textarea
          value={data.spotText}
          onChange={(e) => onChange({ spotText: e.target.value })}
          maxLength={180}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm
          focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ürün için kısa açıklama yazın..."
        />
        <div className="text-xs text-gray-500 text-right">
          {data.spotText.length}/180 karakter
        </div>
      </div>

      {/* Ürün Açıklaması */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Ürün Açıklaması
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm
          focus:ring-blue-500 focus:border-blue-500"
          placeholder="Detaylı ürün açıklaması yazın..."
        />
      </div>
    </div>
  );
}