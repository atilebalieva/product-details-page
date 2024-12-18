import { Link } from "react-router-dom";
import CartDrawer from "../cart/cart-drawer";

export default function Navigation() {
  return (
    <nav className="h-20 w-full flex items-center container mx-auto px-4">
      <ul className="flex justify-between items-center w-full gap-10">
        <li className="w-48">
          <Link to="/" className="flex items-center">
            <img src="../images/logo.png" alt="logo" className="w-9 h-9" />
            <p className="text-xl font-semibold text-black">StyleNest</p>
          </Link>
        </li>
        <li className="flex-grow flex gap-20">
          <div>
            <Link to="">Shop All</Link>
          </div>
          <div>
            <Link to="">Latest Arrivals</Link>
          </div>
        </li>
        <li>
          <Link to="">
            <CartDrawer />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
