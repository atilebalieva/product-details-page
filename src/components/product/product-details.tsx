import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function ProductDetails({ title, description }: { title: string; description: Array<string> }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-neutral-900 font-medium hover:no-underline text-sm">{title}</AccordionTrigger>
        <AccordionContent>
          <ul>
            {description.map((text) => (
              <li className="text-xs list-disc" key={title}>
                {text}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
