import React from "react";
import { Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./components/product/product-page";

function App() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <Navigation />
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
