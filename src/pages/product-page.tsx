import { useParams } from "react-router-dom";
import Product from "../components/product/product";
import { useQuery } from "react-query";

export default function ProductPage() {
  const { product_id } = useParams();

  console.log("Project page");
  return <div></div>;
}
