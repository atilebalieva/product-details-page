import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./pages/product-page";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/dashboard";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
export default App;
