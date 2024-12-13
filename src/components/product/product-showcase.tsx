import { ImagesColorsUrl } from "@/lib/infer-type";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const { nanoid } = require("nanoid");

export default function ProductShowCase({ variants }: { variants: ImagesColorsUrl }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeThumbnail, setActiveThumbnail] = useState([0]);
  const searchParams = new URLSearchParams(window.location.search);
  const selectedColor = searchParams.get("type") || variants[0].color;

  const updatePreview = (index: number) => {
    api?.scrollTo(index);
  };

  /*   useEffect(() => {
    if (!api) return;

    const handleSlidesInView = (e: any) => {
      const firstSlideInView = e.slidesInView()[0];

      if (firstSlideInView !== activeThumbnail) {
        setActiveThumbnail(firstSlideInView);
      }
    };

    api.on("slidesInView", handleSlidesInView);

    return () => {
      api.off("slidesInView", handleSlidesInView);
    };
  }, [api, activeThumbnail]); */
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("slidesInView", (e) => {
      setActiveThumbnail(e.slidesInView());
    });
  }, [activeThumbnail]);

  console.log(activeThumbnail);
  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {variants.map(
          (variant) =>
            variant.color === selectedColor && (
              <CarouselItem key={nanoid()}>
                <img
                  src={variant.image_url}
                  alt={variant.product_id}
                  className="w-[880px] h-[520px] rounded object-cover"
                />
              </CarouselItem>
            ),
        )}
      </CarouselContent>

      <div className="flex overflow-clip gap-5 py-2">
        {variants.map(
          (variant, index) =>
            variant.color === selectedColor && (
              <div key={nanoid()}>
                <img
                  onClick={() => updatePreview(index)}
                  src={variant.image_url}
                  alt={variant.product_id}
                  className={cn(
                    index === activeThumbnail[0] ? "opacity-100" : "opacity-75",
                    "w-[100px] h-[120px] rounded transition-all duration-300 ease-in-out cursor-pointer object-cover hover:opacity-75",
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Carousel>
  );
}
