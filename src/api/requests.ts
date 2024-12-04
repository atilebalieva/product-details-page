import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("./data/products.json");
  return response.data;
};

export const fetchProductReviews = async () => {
  const response = await axios.get("./data/product-reviews.json");
  return response.data;
};

export const fetchProductInfo = async () => {
  const response = await axios.get("./data/product-info.json");
  return response.data;
};

export const fetchProductImages = async () => {
  const response = await axios.get("./data/product-images.json");
  return response.data;
};
export const fetchProductInventory = async () => {
  const response = await axios.get("./data/inventory.json");
  return response.data;
};
