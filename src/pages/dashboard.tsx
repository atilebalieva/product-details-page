import { useQuery } from "react-query";
import { fetchProductImages, fetchProductInventory, fetchProducts } from "../api/requests";
import { Link } from "react-router-dom";
import { ImageUrl, MergedProductsData, Price, Product } from "../lib/infer-type";
import ProductPrice from "../components/product/product-price";

export default function Dashboard() {
  const { data: products, isLoading: loadingProducts } = useQuery(["products"], fetchProducts);
  const { data: images, isLoading: loadingImages } = useQuery(["images"], fetchProductImages);
  const { data: prices, isLoading: loadingPrices } = useQuery(["price"], fetchProductInventory);

  if (loadingProducts || loadingImages || loadingPrices) {
    return <div>Loading...</div>;
  }

  const mergedProductsData = products.map((product: Product) => {
    const productImage = images.find((image: ImageUrl) => image.product_id === product.product_id)?.image_url;
    const productPrice = prices.find((price: Price) => price.product_id === product.product_id);
    return { ...product, image: productImage, price: productPrice };
  });

  console.log(mergedProductsData);

  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3  bg-white">
      {mergedProductsData.map((product: MergedProductsData) => (
        <Link
          className="py-2"
          key={product.product_id}
          to={`/products/${product.product_id}?id=${product.product_id}&title=${product.name}`}
        >
          <img
            className="rounded-md pb-2 w-[720px] h-[480px] object-cover"
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
    </main>
  );
}
