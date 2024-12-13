import { ProductDetailsType } from "@/lib/infer-type";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
const { nanoid } = require("nanoid");

export default function ProductDetails({ details }: { details: ProductDetailsType[] }) {
  return (
    <Accordion type="single" collapsible>
      {details.map((detail, index) => {
        return (
          <AccordionItem value={`item${index}`} key={nanoid()}>
            <AccordionTrigger className="text-neutral-900 font-medium hover:no-underline text-sm">
              {detail.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="!list-disc" style={{ listStyleType: "disc" }}>
                {detail.description.map((description) => (
                  <li className="text-xs" key={nanoid()}>
                    {description}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
