import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import AddCart from "@/components/cart/add-cart";
import ProductDetails from "../components/product/product-details";
import {
  DataOfProductDescription,
  DataOfProductDetails,
  DataOfProductImages,
  DataOfProductInventory,
} from "../api/requests";
import ProductPrice from "../components/product/product-price";
import ProductShowCase from "../components/product/product-showcase";
import Commercial from "../components/commercial";
import ProductSize from "../components/product/product-size";
import ProductPick from "../components/product/product-pick";

export default function ProductPage() {
  const { product_id } = useParams<{ product_id?: string }>();

  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorOnProduct,
  } = DataOfProductDescription(product_id as string);

  const {
    data: productImages,
    isLoading: isLoadingProductImages,
    error: errorOnProductImages,
  } = DataOfProductImages(product_id as string);

  const {
    data: productInventory,
    isLoading: isLoadingInventory,
    error: errorOnProductInventory,
  } = DataOfProductInventory(product_id as string);

  const {
    data: productDetails,
    isLoading: isLoadingDetails,
    error: errorOnProductDetails,
  } = DataOfProductDetails(product_id as string);

  if (isLoadingProduct || isLoadingProductImages || isLoadingInventory || isLoadingDetails) return <Loader />;
  if (errorOnProduct || errorOnProductImages || errorOnProductInventory || errorOnProductDetails)
    return <div className="text-red-500">Something went wrong</div>;

  return (
    <section className=" bg-white rounded-md py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="lg:w-[50%] w-full">
          <ProductShowCase variants={productImages} />
        </div>
        <div className="lg:w-[50%] w-full ">
          <h1 className="text-3xl font-semibold text-black mb-3">{product.name}</h1>
          <div className="mb-1">
            <ProductPrice price={productInventory[0]} />
          </div>
          <div className="text-xs mb-7">{product.description}</div>
          <div className="mb-7">
            <h2 className="text-xs text-neutral-600 mb-3">Available colors</h2>
            <ProductPick productInventory={productInventory} />
          </div>
          <div className="mb-7">{productInventory[0]?.size && <ProductSize inventory={productInventory} />}</div>
          <ProductDetails details={productDetails} />
        </div>
      </div>
      <Commercial />
    </section>
  );
}
