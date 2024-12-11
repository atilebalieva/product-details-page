import { useQuery } from "react-query";
import {
  fetchProductImages,
  fetchProductInfo,
  fetchProductInventory,
  fetchProductReviews,
  fetchProducts,
} from "./requests";

const useApiData = (queryKey: string, fetchFunction: () => Promise<any>) => {
  const { data, isLoading, error } = useQuery([queryKey], fetchFunction);
  return { data, isLoading, error };
};

export const useAllProductData = () => {
  const productsQuery = useApiData("products", fetchProducts);
  const imagesQuery = useApiData("images", fetchProductImages);
  const pricesQuery = useApiData("price", fetchProductInventory);
  const reviewsQuery = useApiData("reviews", fetchProductReviews);
  const productInfoQuery = useApiData("productInfo", fetchProductInfo);

  return {
    productsQuery,
    imagesQuery,
    pricesQuery,
    reviewsQuery,
    productInfoQuery,
  };
};

type FetchFunctionsKeys = "products" | "images" | "price" | "reviews" | "productInfo";

const fetchFunctions = {
  products: fetchProducts,
  images: fetchProductImages,
  price: fetchProductInventory,
  reviews: fetchProductReviews,
  productInfo: fetchProductInfo,
};

export const useDynamicApi = (key: FetchFunctionsKeys) => useApiData(key, fetchFunctions[key]);
