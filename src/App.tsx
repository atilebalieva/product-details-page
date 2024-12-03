import React from "react";
import { Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";

function App() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
