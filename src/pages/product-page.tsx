import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import { ImagesColorsUrl, MergedSingleProductData, Price, Product } from "@/lib/infer-type";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import AddCart from "@/components/cart/add-cart";
import ProductDetails from "../components/product/product-details";
import { useAllProductData } from "../api/product-data";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "../api/requests";

export default function ProductPage() {
  const { product_id } = useParams<{ product_id?: string }>();

  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorOnProduct,
  } = useQuery({
    enabled: !!product_id,
    queryKey: ["product", product_id],
    queryFn: () => {
      return fetchSingleProduct(product_id as string);
    },
  });

  if (isLoadingProduct) return <Loader />;
  if (errorOnProduct) return <div className="text-red-500">Something went wrong</div>;

  console.log("DATA FROM API", product);

  return <div>{/* <ProductDetails /> */}</div>;
}
