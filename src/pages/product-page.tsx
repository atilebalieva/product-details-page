import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import { ImagesColorsUrl, MergedSingleProductData, Price, Product } from "@/lib/infer-type";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import AddCart from "@/components/cart/add-cart";
import ProductDetails from "../components/product/product-details";
import { useAllProductData } from "../api/product-data";
import { useQuery } from "react-query";
import { fetchProducts, fetchSingleProduct } from "../api/requests";

export default function ProductPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(["products"], fetchSingleProduct(id));

  /*   const { productsQuery, imagesQuery, pricesQuery, reviewsQuery, productInfoQuery } = useAllProductData();

  const { data: products, isLoading: loadingProducts, error: productError } = productsQuery;
  const { data: images, isLoading: loadingImages, error: imagesError } = imagesQuery;
  const { data: prices, isLoading: loadingPrices, error: priceError } = pricesQuery;
  const { data: reviews, isLoading: loadingReviews, error: reviewsError } = reviewsQuery;
  const { data: productInfo, isLoading: loadingproductInfo, error: productInfoError } = productInfoQuery;

  if (loadingProducts || loadingImages || loadingPrices || loadingReviews || loadingproductInfo) return <Loader />;

  if (productError || imagesError || priceError || reviewsError || productInfoError)
    return <div className="text-red-500">Something went wrong</div>; */

  /*   const mergedProductsData: MergedSingleProductData = products.map((product: Product) => {
    const productImage =
      images.find((image: ImagesColorsUrl) => image.product_id === product.product_id)?.image_url || "";
    const productPrice = prices.find((price: Price) => price.product_id === product.product_id);
    return { ...product, image: productImage, price: productPrice };
  }); */

  return <div>{/* <ProductDetails /> */}</div>;
}
