export interface Order {
  id: string;
  productCount: number;
  customer: string;
  amount: number;
  orderStatus: 'pending' | 'completed' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'paid' | 'unpaid';
  orderDate: string;
  customerType: string;
  phone: string;
  email: string;
  taxId: string;
  city: string;
  district: string;
  address: string;
  orderNote: string;
  products: OrderProduct[];
}

export interface OrderProduct {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  total: number;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}