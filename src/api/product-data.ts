import { useQuery } from "react-query";
import {
  fetchProductImages,
  fetchProductDetails,
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
  const productDetailsQuery = useApiData("productDetails", fetchProductDetails);

  return {
    productsQuery,
    imagesQuery,
    pricesQuery,
    reviewsQuery,
    productDetailsQuery,
  };
};

type FetchFunctionsKeys = "products" | "images" | "price" | "reviews" | "productDetails";

const fetchFunctions = {
  products: fetchProducts,
  images: fetchProductImages,
  price: fetchProductInventory,
  reviews: fetchProductReviews,
  productDetails: fetchProductDetails,
};

export const useDynamicApi = (key: FetchFunctionsKeys) => useApiData(key, fetchFunctions[key]);
