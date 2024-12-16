import { useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";

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

  return (
    <div
      style={{ background: color }}
      className={cn(
        "w-8 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out hober: opacity-75 border",
        selectedColor === type ? "opacity-100" : "opacity-50",
      )}
      onClick={() => navigate(`/products/${id}?id=${id}&title=${title}&type=${type}`, { replace: false })}
    ></div>
  );
}
