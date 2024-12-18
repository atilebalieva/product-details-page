import { useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import { FaCheck } from "react-icons/fa";

function getColorHex(colorName: string) {
  var ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return "#ffffff";
  ctx.fillStyle = colorName;
  return ctx.fillStyle;
}

function isDarkColor(colorName: string): boolean {
  const hexColor = getColorHex(colorName);

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance < 0.5;
}

export default function ProductColors({ color, type }: { color: string; type: string }) {
  const navigate = useNavigate();
  const checkmarkColor = isDarkColor(color) ? "text-white" : "dark-gray";

  const [searchParams] = useSearchParams();

  const selectedColor = searchParams.get("type");
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const image_url = searchParams.get("image");
  const size = searchParams.get("size") || null;
  const price = searchParams.get("price");

  console.log({ id, title, price, selectedColor, size, image_url });

  function generateLink() {
    return size
      ? `/products/${id}?id=${id}&title=${title}&price=${price}&type=${color}&size=${size}&image=${image_url}`
      : `/products/${id}?id=${id}&title=${title}&price=${price}&type=${color}&image=${image_url}`;
  }

  return (
    <div
      style={{ background: color }}
      className={cn(
        "w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-75 border flex items-center justify-center",
      )}
      onClick={() => navigate(generateLink(), { replace: false })}
    >
      {selectedColor === type && <FaCheck className={cn(checkmarkColor, "text-sm")} />}
    </div>
  );
}
