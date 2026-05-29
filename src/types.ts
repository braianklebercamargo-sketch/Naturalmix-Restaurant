export interface ProductPrice {
  weightOrUn: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  prices: ProductPrice[];
  imagePlaceholder: string;
}

export interface Category {
  title: string;
  description?: string;
  products: Product[];
}
