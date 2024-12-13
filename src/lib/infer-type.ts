export type Product = {
  category: string;
  collection: string;
  created_at: string;
  description: string;
  name: string;
  product_id: string;
};

export type SingleImageUrl = {
  color: string;
  image_url: string;
  product_id: string;
};

export type ImagesColorsUrl = {
  color: string;
  image_url: string;
  product_id: string;
}[];

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

export type ProductInfo = {
  product_id: string;
  title: string;
  description: string[];
}[];

export type ProductReviews = {
  product_id: string;
  user_id: string;
  rating: number;
  content: string;
  created_at: string;
}[];

export type MergedProductsData = {
  category: string;
  collection: string;
  created_at: string;
  description: string;
  name: string;
  product_id: string;
  image: string;
  price: Price;
}[];

export type MergedSingleProductData = {
  category: string;
  collection: string;
  created_at: string;
  description: string;
  name: string;
  product_id: string;
  image: string;
  price: Price;
  productInfo: ProductInfo;
  reviews: ProductReviews;
};

export type ProductDetailsType = {
  product_id: string;
  title: string;
  description: string[];
};
