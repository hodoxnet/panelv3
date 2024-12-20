import { 
  Home, 
  Settings, 
  Languages, 
  Menu as MenuIcon, 
  Users, 
  HeadphonesIcon, 
  Ticket,
  ShoppingCart,
  Package,
  Boxes,
  FolderKanban,
  Box,
  FileText,
  Wrench,
  HelpCircle,
  Star,
  File,
  Book,
  UserPlus,
  Building2,
  Newspaper,
  Image,
  Images,
  Camera,
  Video,
  Wallet,
  UserCog,
  MessageSquare,
  Mail,
  FileQuestion,
  UserSearch,
  MessageCircle,
  StickyNote,
  LogOut
} from 'lucide-react';
import type { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    title: 'Anasayfa',
    path: '/dashboard',
    icon: Home
  },
  {
    title: 'Site Yönetimi',
    icon: Settings,
    submenu: [
      { title: 'Genel Ayarlar', path: '/dashboard/genel-ayarlar' },
      { title: 'Açılır Mesaj', path: '/dashboard/acilir-mesaj' },
      { title: 'Api Ayarları', path: '/dashboard/api-ayarlari' },
      { title: 'Alışveriş Ayarları', path: '/dashboard/alisveris-ayarlari' },
      { title: 'İletişim Ayarları', path: '/dashboard/iletisim-ayarlari' },
      { title: 'Sosyal Medya', path: '/dashboard/sosyal-medya' },
      { title: 'Modül Ayarları', path: '/dashboard/modul-ayarlari' },
      { title: 'Modül Sıralama', path: '/dashboard/modul-siralama' },
      { title: 'Limit Ayarları', path: '/dashboard/limit-ayarlari' },
      { title: 'Bakım Modu', path: '/dashboard/bakim-modu' },
      { title: 'Mail Ayarları', path: '/dashboard/mail-ayarlari' }
    ]
  },
  {
    title: 'Siparişler',
    icon: ShoppingCart,
    submenu: [
      { title: 'Ödeme Bekleyen', path: '/dashboard/odeme-bekleyen' },
      { title: 'Tüm Siparişler', path: '/dashboard/tum-siparisler' }
    ]
  },
  {
    title: 'Ürün Yönetimi',
    icon: Package,
    submenu: [
      { title: 'Ürünler', path: '/dashboard/urunler' },
      { title: 'Ürün Kategorileri', path: '/dashboard/urun-kategorileri' },
      { title: 'Varyantlar', path: '/dashboard/varyantlar' },
      { title: 'Özellik Grupları', path: '/dashboard/ozellik-gruplari' }
    ]
  },
  {
    title: 'Proje Yönetimi',
    icon: FolderKanban,
    submenu: [
      { title: 'Projeler', path: '/dashboard/projeler' },
      { title: 'Proje Kategorileri', path: '/dashboard/proje-kategorileri' }
    ]
  },
  {
    title: 'Paket Yönetimi',
    icon: Boxes,
    submenu: [
      { title: 'Paketler', path: '/dashboard/paketler' },
      { title: 'Paket Kategori', path: '/dashboard/paket-kategori' }
    ]
  },
  {
    title: 'Sayfa Yönetimi',
    icon: FileText,
    submenu: [
      { title: 'Yeni Sayfa Ekle', path: '/dashboard/yeni-sayfa' },
      { title: 'Sayfa Listesi', path: '/dashboard/sayfa-listesi' }
    ]
  },
  {
    title: 'Hizmet Yönetimi',
    icon: Wrench,
    submenu: [
      { title: 'Yeni Hizmet Ekle', path: '/dashboard/yeni-hizmet' },
      { title: 'Hizmet Listesi', path: '/dashboard/hizmet-listesi' }
    ]
  },
  {
    title: 'SSS',
    icon: HelpCircle,
    submenu: [
      { title: 'Sorular', path: '/dashboard/sorular' },
      { title: 'Yeni Soru Ekle', path: '/dashboard/yeni-soru' }
    ]
  },
  {
    title: 'Referanslar',
    icon: Star,
    submenu: [
      { title: 'Yeni Referans Ekle', path: '/dashboard/yeni-referans' },
      { title: 'Referans Listesi', path: '/dashboard/referans-listesi' }
    ]
  },
  {
    title: 'Belgeler',
    icon: File,
    submenu: [
      { title: 'Yeni Belge Ekle', path: '/dashboard/yeni-belge' },
      { title: 'Belge Listesi', path: '/dashboard/belge-listesi' }
    ]
  },
  {
    title: 'E-Katalog',
    icon: Book,
    submenu: [
      { title: 'Yeni Katalog Ekle', path: '/dashboard/yeni-katalog' },
      { title: 'Katalog Listesi', path: '/dashboard/katalog-listesi' }
    ]
  },
  {
    title: 'Ekip',
    icon: UserPlus,
    submenu: [
      { title: 'Yeni Ekip Üyesi', path: '/dashboard/yeni-ekip' },
      { title: 'Ekip Listesi', path: '/dashboard/ekip-listesi' }
    ]
  },
  {
    title: 'Bayi/Şube',
    icon: Building2,
    submenu: [
      { title: 'Yeni Bayi/Şube', path: '/dashboard/yeni-bayi' },
      { title: 'Bayi/Şube Listesi', path: '/dashboard/bayi-listesi' }
    ]
  },
  {
    title: 'Haberler',
    icon: Newspaper,
    submenu: [
      { title: 'Yeni Haber', path: '/dashboard/yeni-haber' },
      { title: 'Haber Listesi', path: '/dashboard/haber-listesi' }
    ]
  },
  {
    title: 'Slider',
    icon: Image,
    submenu: [
      { title: 'Yeni Slider', path: '/dashboard/yeni-slider' },
      { title: 'Slider Listesi', path: '/dashboard/slider-listesi' }
    ]
  },
  {
    title: 'Banner',
    icon: Images,
    submenu: [
      { title: 'Yeni Banner', path: '/dashboard/yeni-banner' },
      { title: 'Banner Listesi', path: '/dashboard/banner-listesi' }
    ]
  },
  {
    title: 'Foto Galeri',
    icon: Camera,
    submenu: [
      { title: 'Yeni Galeri', path: '/dashboard/yeni-galeri' },
      { title: 'Galeri Listesi', path: '/dashboard/galeri-listesi' }
    ]
  },
  {
    title: 'Video Galeri',
    icon: Video,
    submenu: [
      { title: 'Yeni Video', path: '/dashboard/yeni-video' },
      { title: 'Video Listesi', path: '/dashboard/video-listesi' }
    ]
  },
  {
    title: 'Banka Hesapları',
    icon: Wallet,
    submenu: [
      { title: 'Yeni Hesap', path: '/dashboard/yeni-hesap' },
      { title: 'Hesap Listesi', path: '/dashboard/hesap-listesi' }
    ]
  },
  {
    title: 'Yöneticiler',
    icon: UserCog,
    submenu: [
      { title: 'Yeni Yönetici', path: '/dashboard/yeni-yonetici' },
      { title: 'Yönetici Listesi', path: '/dashboard/yonetici-listesi' }
    ]
  },
  {
    title: 'Dil Yönetimi',
    icon: Languages,
    submenu: [
      { title: 'Yeni Dil', path: '/dashboard/yeni-dil' },
      { title: 'Dil Listesi', path: '/dashboard/dil-listesi' }
    ]
  },
  {
    title: 'Menü Yönetimi',
    icon: MenuIcon,
    submenu: [
      { title: 'Header Menü', path: '/dashboard/header-menu' },
      { title: 'Footer Menü', path: '/dashboard/footer-menu' }
    ]
  },
  {
    title: 'Müşteriler',
    icon: Users,
    path: '/dashboard/musteriler'
  },
  {
    title: 'Destek',
    path: '/dashboard/destek',
    icon: HeadphonesIcon
  },
  {
    title: 'İndirim Kuponları',
    path: '/dashboard/kuponlar',
    icon: Ticket
  },
  {
    title: 'Mesajlar',
    path: '/dashboard/mesajlar',
    icon: MessageSquare
  },
  {
    title: 'E-Bülten',
    path: '/dashboard/e-bulten',
    icon: Mail
  },
  {
    title: 'Teklif Formu',
    path: '/dashboard/teklif-formu',
    icon: FileQuestion
  },
  {
    title: 'İK',
    path: '/dashboard/ik',
    icon: UserSearch
  },
  {
    title: 'Yorumlar',
    path: '/dashboard/yorumlar',
    icon: MessageCircle
  },
  {
    title: 'Notlar',
    path: '/dashboard/notlar',
    icon: StickyNote
  },
  {
    title: 'Çıkış',
    path: '/logout',
    icon: LogOut
  }
];