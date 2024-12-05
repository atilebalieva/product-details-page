import formatPrice from "./../../lib/format-price";
import { Badge } from "../ui/badge";
import ProductPrice from "./product-price";
import ProductDetails from "./product-details";
import AddCart from "../cart/add-cart";
import { Button } from "../ui/button";

export default function Product() {
  const price = {
    product_id: "voyager-hoodie",
    sku: "vh-green-sm",
    color: "green",
    size: "sm",
    list_price: 95,
    discount: null,
    discount_percentage: 20,
    sale_price: 76,
    sold: 80,
    stock: 420,
  };

  const productInfo = [
    {
      product_id: "voyager-hoodie",
      title: "Features",
      description: [
        "Designed for comfort and durability.",
        "Soft, breathable fabric ideal for travel and adventure.",
        "Large front pocket and adjustable hood.",
        "Minimalist design pairs well with any style.",
        "Made with eco-conscious materials.",
      ],
    },
    {
      product_id: "voyager-hoodie",
      title: "Fabric & Care",
      description: [
        "Machine wash cold on a gentle cycle.",
        "Tumble dry low or hang to dry.",
        "Do not use fabric softeners or bleach.",
        "Iron on a low setting if necessary.",
      ],
    },
    {
      product_id: "voyager-hoodie",
      title: "Shipping",
      description: [
        "Free standard shipping on all orders - no minimum spend required.",
        "Expedited shipping available at an additional cost.",
        "Packaged in biodegradable materials to reduce environmental impact.",
      ],
    },
  ];

  return (
    <section className=" bg-white rounded-md py-6">
      <div className="container mx-auto px-4 flex justify-between gap-5">
        <div className="w-[50%] border">
          <div>Carousel block</div>
        </div>
        <div className="w-[50%]">
          <h1 className="text-3xl font-semibold text-black mb-3">Voyager Hoodie</h1>
          <div className="mb-1">
            {price.discount_percentage > 0 ? (
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-xl font-medium">${price.sale_price}</p>
                  <span className="line-through text-neutral-400 text-sm">${price.list_price}</span>
                </div>
                <Badge className="text-xs bg-amber-50 text-amber-700 px-px" variant="outline">
                  {price.discount_percentage}% OFF
                </Badge>
              </div>
            ) : (
              <p className="text-xl font-medium">${price.list_price}</p>
            )}
          </div>
          {/* Stars/Rating */}
          <div className="text-xs mb-7">
            The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those
            who are always searching for the next adventure.
          </div>
          {/* Available Colors */}
          <div className="mb-7">
            <h2 className="text-xs text-neutral-600 mb-3">Available sizes</h2>
            <div className="flex gap-3">
              <Button variant={"secondary"} className="w-11 rounded uppercase text-xs text-neutral-900 bg-white border">
                xs
              </Button>
              <Button variant={"secondary"} className="w-11 rounded uppercase text-xs text-neutral-900 bg-white border">
                s
              </Button>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xs text-neutral-600 mb-3">Quantity</h2>
            <AddCart />
          </div>
          <div>
            {productInfo.map((info) => (
              <ProductDetails title={info.title} description={info.description} key={info.product_id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
