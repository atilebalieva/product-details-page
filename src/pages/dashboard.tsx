import { useQuery } from "react-query";
import { fetchProductImages, fetchProductInventory, fetchProducts } from "../api/requests";
import { Link } from "react-router-dom";
import { MergedProductsData, MergedSingleProductData, Price, Product, SingleImageUrl } from "../lib/infer-type";
import ProductPrice from "../components/product/product-price";
import Loader from "../components/loader";

export default function Dashboard() {
  const { data: products, isLoading: loadingProducts, error: productError } = useQuery(["products"], fetchProducts);
  const { data: images, isLoading: loadingImages, error: imagesError } = useQuery(["images"], fetchProductImages);
  const { data: prices, isLoading: loadingPrices, error: priceError } = useQuery(["price"], fetchProductInventory);

  if (loadingProducts || loadingImages || loadingPrices) return <Loader />;

  if (productError || imagesError || priceError) return <div className="text-red-500">Something went wrong</div>;

  const mergedProductsData: MergedProductsData[] = products.map((product: Product) => {
    const productImage =
      images.find((image: SingleImageUrl) => image.product_id === product.product_id)?.image_url || "";
    const productPrice = prices.find((price: Price) => price.product_id === product.product_id);
    return { ...product, image: productImage, price: productPrice };
  });

  console.log(mergedProductsData[0]);

  function generateLink(product: MergedProductsData) {
    if (product.price.discount_percentage > 0 && product.price.size !== null)
      return `/products/${product.product_id}?id=${product.product_id}&title=${product.name}&price=${product.price.sale_price}&type=${product.price.color}&image=${product.image}`;
    else if (product.price.discount_percentage === null && product.price.size !== null)
      return `/products/${product.product_id}?id=${product.product_id}&title=${product.name}&price=${product.price.list_price}&type=${product.price.color}&image=${product.image}`;
    else if (product.price.discount_percentage === null && product.price.size === null)
      return `/products/${product.product_id}?id=${product.product_id}&title=${product.name}&price=${product.price.list_price}&type=${product.price.color}&size=${product.price.size}&image=${product.image}`;
    else
      return `/products/${product.product_id}?id=${product.product_id}&title=${product.name}&price=${product.price.sale_price}&type=${product.price.color}&size=${product.price.size}&image=${product.image}`;
  }

  return (
    <main className=" bg-white rounded-md py-6">
      <div className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {mergedProductsData.map((product) => (
          <Link
            to={generateLink(product)}
            key={product.product_id}
            className="block py-2 transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.product_id}
              className="rounded-md pb-2 w-[680px] h-[420px] object-cover"
              loading="lazy"
            />
            <div className="flex justify-between items-center">
              <div className="font-medium">
                <h2>{product.name}</h2>
              </div>
              <div>
                <ProductPrice price={product.price} />
                {/*  <Badge className="text-sm" variant={"secondary"}>
                  {price.discount_percentage > 0 ? (
                    <div className="flex items-center gap-2">
                      <p>{formatPrice(price.sale_price)} </p>
                      <span className="line-through text-neutral-400 text-xs">{formatPrice(price.list_price)}</span>
                    </div>
                  ) : (
                    <>{formatPrice(price.list_price)}</>
                  )}
                </Badge> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
