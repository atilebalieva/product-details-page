import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./pages/product-page";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-8">
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/products/:product_id" element={<ProductPage />}></Route>
          </Routes>{" "}
        </div>
      </div>
    </QueryClientProvider>
  );
}
export default App;
