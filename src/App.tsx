import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./components/product/product-page";

function App() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <Navigation />
        {/*         <Routes>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
 */}{" "}
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
