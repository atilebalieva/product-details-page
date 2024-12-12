import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useQuery } from "react-query";
import { fetchProductDetails } from "../../api/requests";

export default function ProductDetails() {
  const { data: productDetails, isLoading, error } = useQuery(["productDetails"], fetchProductDetails);

  if (!productDetails) return <div> No data</div>;
  if (error) return <div>Error</div>;

  console.log("PRODUCT DETAILS:", productDetails);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-neutral-900 font-medium hover:no-underline text-sm">
          Product Detais
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {/*  {description.map((text) => (
              <li className="text-xs list-disc" key={title}>
                {text}
              </li>
            ))} */}
            <li>Content Product Detais</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
