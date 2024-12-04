import { useQuery } from "react-query";
import { fetchProductImages, fetchProductInventory, fetchProducts } from "../api/requests";
import { Link } from "react-router-dom";
import { ImageUrl, MergedProductsData, Price, Product } from "../lib/infer-type";
import ProductPrice from "../components/product/product-price";
import Loader from "../components/loader";

export default function Dashboard() {
  const { data: products, isLoading: loadingProducts, error: productError } = useQuery(["products"], fetchProducts);
  const { data: images, isLoading: loadingImages, error: imagesError } = useQuery(["images"], fetchProductImages);
  const { data: prices, isLoading: loadingPrices, error: priceError } = useQuery(["price"], fetchProductInventory);

  if (loadingProducts || loadingImages || loadingPrices) return <Loader />;

  const mergedProductsData = products?.map((product: Product) => {
    const productImage = images.find((image: ImageUrl) => image.product_id === product.product_id)?.image_url;
    const productPrice = prices.find((price: Price) => price.product_id === product.product_id);
    return { ...product, image: productImage, price: productPrice };
  });

  /*   console.log(mergedProductsData); */

  return (
    <main className=" bg-white rounded-md ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3  container mx-auto px-4">
        {mergedProductsData?.map((product: MergedProductsData) => (
          <Link
            className="py-2"
            key={product.product_id}
            /*             to={`/products/${product.product_id}?id=${product.product_id}&title=${product.name}`}
             */
            to={`/products/${product.product_id}`}
          >
            <img
              className="rounded-md pb-2 w-[680px] h-[420px] object-cover"
              src={product.image}
              alt={product.product_id}
              loading="lazy"
            />
            <div className="flex justify-between">
              <div className="font-medium">
                <h2>{product.name}</h2>
              </div>
              <div>
                <ProductPrice price={product.price} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
