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

export default function ProductColors({
  id,
  title,
  type,
  color,
}: {
  id: string;
  title: string;
  type: string;
  color: string;
}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedColor = searchParams.get("type");
  const checkmarkColor = isDarkColor(color) ? "text-white" : "dark-gray";

  return (
    <div
      style={{ background: color }}
      className={cn(
        "w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-75 border flex items-center justify-center",
      )}
      onClick={() => navigate(`/products/${id}?id=${id}&title=${title}&type=${type}`, { replace: false })}
    >
      {selectedColor === type && <FaCheck className={cn(checkmarkColor, "text-sm")} />}
    </div>
  );
}
