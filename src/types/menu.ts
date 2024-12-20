import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  path?: string;
  icon?: LucideIcon;
  submenu?: SubMenuItem[];
}