import { useParams } from "react-router-dom";
import Product from "../components/product/product";
import { useQuery } from "react-query";

export default function ProductPage() {
  const { product_id } = useParams();

  const { data: products, isLoading: loadingProducts, error: productError } = useQuery(["products"], fetchProducts);
  const { data: images, isLoading: loadingImages, error: imagesError } = useQuery(["images"], fetchProductImages);
  const { data: prices, isLoading: loadingPrices, error: priceError } = useQuery(["price"], fetchProductInventory);

  if (loadingProducts || loadingImages || loadingPrices) return <Loader />;

  const mergedProductsData = products?.map((product: Product) => {
    const productImage = images.find((image: ImageUrl) => image.product_id === product.product_id)?.image_url;
    const productPrice = prices.find((price: Price) => price.product_id === product.product_id);
    return { ...product, image: productImage, price: productPrice };
  });

  console.log("Project page");
  return <div></div>;
}
