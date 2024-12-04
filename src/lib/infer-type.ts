export type Product = {
  category: string;
  collection: string;
  created_at: string;
  description: string;
  name: string;
  product_id: string;
};

export type ImageUrl = {
  color: string;
  image_url: string;
  product_id: string;
};

export type Price = {
  color: string;
  discount: null;
  discount_percentage: number;
  list_price: number;
  product_id: string;
  sale_price: number;
  size: string;
  sku: string;
  sold: number;
  stock: number;
};

export type MergedProductsData = {
  category: string;
  collection: string;
  created_at: string;
  description: string;
  name: string;
  product_id: string;
  image: string;
  price: Price;
};
