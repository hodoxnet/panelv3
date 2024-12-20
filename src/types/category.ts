export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
  meta: string;
  parentId?: string;
  children: Category[];
}

export interface CategoryFormData {
  title: string;
  image: string;
  description: string;
  meta: string;
}