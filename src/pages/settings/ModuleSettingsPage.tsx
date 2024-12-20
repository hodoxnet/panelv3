import React, { useState } from 'react';
import { Save } from 'lucide-react';
import ModuleToggle from '../../components/settings/ModuleToggle';
import toast from 'react-hot-toast';

interface ModuleState {
  [key: string]: boolean;
}

export default function ModuleSettingsPage() {
  const [homeModules, setHomeModules] = useState<ModuleState>({
    sliderInfo: true,
    videoArea: false,
    bannerArea: true,
    aboutArea: true,
    servicesArea: false,
    featuredProducts: true,
    productGroups: true,
    recentProjects: false
  });

  const [otherModules, setOtherModules] = useState<ModuleState>({
    membership: false,
    orders: true,
    guestOrders: true,
    loading: false,
    htmlExt: false,
    ssl: false,
    quoteForm: true,
    orderForm: false
  });

  const handleSave = () => {
    toast.success('Modül ayarları başarıyla güncellendi!');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Anasayfa Modülleri */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Anasayfa Modülleri</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <ModuleToggle
            title="Slider Üzeri Bilgi"
            description="Anasayfadaki slider üzerindeki bilgi alanını kapatıp açabilirsiniz."
            enabled={homeModules.sliderInfo}
            onChange={(enabled) => setHomeModules({ ...homeModules, sliderInfo: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Video Alanı"
            description="Anasayfa tanıtım video alanını kapatıp açabilirsiniz."
            enabled={homeModules.videoArea}
            onChange={(enabled) => setHomeModules({ ...homeModules, videoArea: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Banner Alanı"
            description="Anasayfadaki banner alanını kapatıp açabilirsiniz."
            enabled={homeModules.bannerArea}
            onChange={(enabled) => setHomeModules({ ...homeModules, bannerArea: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Hakkımızda Alanı"
            description="Anasayfadaki hakkımızda alanını kapatıp açabilirsiniz."
            enabled={homeModules.aboutArea}
            onChange={(enabled) => setHomeModules({ ...homeModules, aboutArea: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Hizmetlerimiz Alanı"
            description="Anasayfadaki hizmetlerimiz alanını kapatıp açabilirsiniz."
            enabled={homeModules.servicesArea}
            onChange={(enabled) => setHomeModules({ ...homeModules, servicesArea: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Öne Çıkan Ürünlerimiz Alanı"
            description="Anasayfadaki öne çıkan ürünlerimiz alanını kapatıp açabilirsiniz."
            enabled={homeModules.featuredProducts}
            onChange={(enabled) => setHomeModules({ ...homeModules, featuredProducts: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Ürün Grupları Alanı"
            description="Anasayfadaki ürün grupları alanını kapatıp açabilirsiniz."
            enabled={homeModules.productGroups}
            onChange={(enabled) => setHomeModules({ ...homeModules, productGroups: enabled })}
          />
          <ModuleToggle
            title="Anasayfa Son Projelerimiz Alanı"
            description="Anasayfadaki son projelerimiz alanını kapatıp açabilirsiniz."
            enabled={homeModules.recentProjects}
            onChange={(enabled) => setHomeModules({ ...homeModules, recentProjects: enabled })}
          />
        </div>
      </div>

      {/* Diğer Modüller */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Diğer Modüller</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <ModuleToggle
            title="Üyelik"
            description="Sitedeki üyelik modülünü kapatıp açabilirsiniz."
            enabled={otherModules.membership}
            onChange={(enabled) => setOtherModules({ ...otherModules, membership: enabled })}
          />
          <ModuleToggle
            title="Sipariş"
            description="Sitedeki sipariş modülünü kapatıp açabilirsiniz."
            enabled={otherModules.orders}
            onChange={(enabled) => setOtherModules({ ...otherModules, orders: enabled })}
          />
          <ModuleToggle
            title="Üyeliksiz Sipariş"
            description="Sitedeki üyeliksiz sipariş modülünü kapatıp açabilirsiniz."
            enabled={otherModules.guestOrders}
            onChange={(enabled) => setOtherModules({ ...otherModules, guestOrders: enabled })}
          />
          <ModuleToggle
            title="Yükleniyor"
            description="Sitedeki sayfa yükleniyor alanını kapatıp açabilirsiniz."
            enabled={otherModules.loading}
            onChange={(enabled) => setOtherModules({ ...otherModules, loading: enabled })}
          />
          <ModuleToggle
            title=".html uzantı"
            description="Sitenizin .html uzantılı açılmasını kapatıp açabilirsiniz."
            enabled={otherModules.htmlExt}
            onChange={(enabled) => setOtherModules({ ...otherModules, htmlExt: enabled })}
          />
          <ModuleToggle
            title="SSL"
            description="Sitenizin ssl'li şekilde açılmasını kapatıp açabilirsiniz."
            enabled={otherModules.ssl}
            onChange={(enabled) => setOtherModules({ ...otherModules, ssl: enabled })}
          />
          <ModuleToggle
            title="Teklif Formu"
            description="Sitedeki teklif formu bölümünü kapatıp açabilirsiniz."
            enabled={otherModules.quoteForm}
            onChange={(enabled) => setOtherModules({ ...otherModules, quoteForm: enabled })}
          />
          <ModuleToggle
            title="Sipariş Formu"
            description="Ürün detay sayfasındaki sipariş formu alanını kapatıp açabilirsiniz."
            enabled={otherModules.orderForm}
            onChange={(enabled) => setOtherModules({ ...otherModules, orderForm: enabled })}
          />
        </div>
      </div>

      {/* Kaydet Butonu */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md
          hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          Güncelle
        </button>
      </div>
    </div>
  );
}