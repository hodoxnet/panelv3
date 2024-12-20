export interface Product {
  id: string;
  title: string;
  category: string;
  isNew: boolean;
  isHomepage: boolean;
  status: 'active' | 'inactive';
}

export interface ProductTableColumn {
  key: keyof Product | 'actions';
  title: string;
  sortable?: boolean;
}