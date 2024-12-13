import { Product } from "@/lib/infer-type";
import axios from "axios";
import { useQuery } from "react-query";

export const fetchProducts = async () => {
  const response = await axios.get("./data/products.json");
  return response.data;
};

export const fetchSingleProduct = async (id: string) => {
  const response = await axios.get("/data/products.json");
  const product = response.data.find((item: { product_id: string }) => item.product_id === id);

  return product;
};

export const fetchProductReviews = async () => {
  const response = await axios.get("./data/product-reviews.json");
  return response.data;
};

export const fetchProductsDetails = async () => {
  const response = await axios.get("./data/product-info.json");
  return response.data;
};

export const fetchSingleProductDetails = async (id: string) => {
  const response = await axios.get("/data/product-info.json");
  const productDetails = response.data.filter((item: { product_id: string }) => item.product_id === id);

  return productDetails;
};

export const fetchProductImages = async () => {
  const response = await axios.get("./data/product-images.json");
  return response.data;
};

export const fetchSingleProductImages = async (id: string) => {
  const response = await axios.get("/data/product-images.json");
  const product = response.data.filter((item: { product_id: string }) => item.product_id === id);

  return product;
};

export const fetchProductInventory = async () => {
  const response = await axios.get("/data/inventory.json");

  return response.data;
};

export const fetchSingleProductInventory = async (id: string) => {
  const response = await axios.get("/data/inventory.json");
  const productInventory = response.data.filter((item: { product_id: string }) => item.product_id === id);

  return productInventory;
};

export const DataOfProductDescription = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["product", id],
    queryFn: () => {
      return fetchSingleProduct(id);
    },
  });
};

export const DataOfProductImages = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["productImages", id],
    queryFn: () => {
      return fetchSingleProductImages(id);
    },
  });
};

export const DataOfProductInventory = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["productPrice", id],
    queryFn: () => {
      return fetchSingleProductInventory(id);
    },
  });
};

export const DataOfProductDetails = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["productDetails", id],
    queryFn: () => {
      return fetchSingleProductDetails(id);
    },
  });
};
