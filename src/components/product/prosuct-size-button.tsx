import { Button } from "../ui/button";

export default function ProductSizeButton({ size }: { size: string | number }) {
  return (
    <Button variant={"secondary"} className="w-11 rounded uppercase text-xs text-neutral-900 bg-white border">
      {size}
    </Button>
  );
}
