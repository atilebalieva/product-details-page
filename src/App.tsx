import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./pages/product-page";
import Dashboard from "./pages/dashboard";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <div className="px-8">
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/products/:product_id" element={<ProductPage />}></Route>
          </Routes>{" "}
        </div>
      </div>
    </>
  );
}
export default App;
