import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './components/layout/DashboardLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GeneralSettingsPage from './pages/settings/GeneralSettingsPage';
import PopupMessagePage from './pages/settings/PopupMessagePage';
import ApiSettingsPage from './pages/settings/ApiSettingsPage';
import ShoppingSettingsPage from './pages/settings/ShoppingSettingsPage';
import ContactSettingsPage from './pages/settings/ContactSettingsPage';
import SocialMediaSettingsPage from './pages/settings/SocialMediaSettingsPage';
import ModuleSettingsPage from './pages/settings/ModuleSettingsPage';
import ModuleOrderingPage from './pages/settings/ModuleOrderingPage';
import LimitSettingsPage from './pages/settings/LimitSettingsPage';
import MaintenanceModePage from './pages/settings/MaintenanceModePage';
import MailSettingsPage from './pages/settings/MailSettingsPage';
import PendingOrdersPage from './pages/orders/PendingOrdersPage';
import AllOrdersPage from './pages/orders/AllOrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import ProductCategoriesPage from './pages/products/ProductCategoriesPage';
import VariantsPage from './pages/products/VariantsPage';
import FeatureGroupsPage from './pages/products/FeatureGroupsPage';
import NewProductPage from './pages/products/NewProductPage';
import EditProductPage from './pages/products/EditProductPage';

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="genel-ayarlar" element={<GeneralSettingsPage />} />
            <Route path="acilir-mesaj" element={<PopupMessagePage />} />
            <Route path="api-ayarlari" element={<ApiSettingsPage />} />
            <Route path="alisveris-ayarlari" element={<ShoppingSettingsPage />} />
            <Route path="iletisim-ayarlari" element={<ContactSettingsPage />} />
            <Route path="sosyal-medya" element={<SocialMediaSettingsPage />} />
            <Route path="modul-ayarlari" element={<ModuleSettingsPage />} />
            <Route path="modul-siralama" element={<ModuleOrderingPage />} />
            <Route path="limit-ayarlari" element={<LimitSettingsPage />} />
            <Route path="bakim-modu" element={<MaintenanceModePage />} />
            <Route path="mail-ayarlari" element={<MailSettingsPage />} />
            <Route path="odeme-bekleyen" element={<PendingOrdersPage />} />
            <Route path="tum-siparisler" element={<AllOrdersPage />} />
            <Route path="urunler" element={<ProductsPage />} />
            <Route path="urun-kategorileri" element={<ProductCategoriesPage />} />
            <Route path="varyantlar" element={<VariantsPage />} />
            <Route path="ozellik-gruplari" element={<FeatureGroupsPage />} />
            <Route path="urunler/yeni" element={<NewProductPage />} />
            <Route path="urunler/duzenle/:id" element={<EditProductPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}