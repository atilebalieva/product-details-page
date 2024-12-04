import { useParams } from "react-router-dom";
import ProductDescription from "./product-description";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <ProductDescription />
    </div>
  );
}
