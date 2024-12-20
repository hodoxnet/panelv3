export interface VariantOption {
  id: string;
  name: string;
  stock: number;
  price: number;
}

export interface Variant {
  id: string;
  name: string;
  isActive: boolean;
  options: VariantOption[];
}

export interface VariantFormData {
  name: string;
  isActive: boolean;
}