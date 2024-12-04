import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import ProductPage from "./components/product/product-page";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-5">
        <div>
          <Navigation />
          <Dashboard />
          {/*         <Routes>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
 */}{" "}
          {/* <ProductPage /> */}
        </div>
      </div>
    </QueryClientProvider>
  );
}
/* container mx-auto px-4 */
export default App;
