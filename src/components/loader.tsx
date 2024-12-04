import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FadeLoader color="#0284C7" />;
    </div>
  );
}
