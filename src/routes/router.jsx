import App from "@/App";
import WrapperHome from "@/components/layouts/wraps/wrapperHome";
import Footer from "@/components/pribadi/Footer";
import Header from "@/components/pribadi/Header";
import CreateProductPage from "@/pages/admin/CreateProductPage";
import ProductManagementPage from "@/pages/admin/ProductManagmentPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ProductDetailPage from "@/pages/ProductDetailPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router"; // Gunakan react-router-dom

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

const Layout = () => {
  const location = useLocation(); // Gunakan useLocation di dalam BrowserRouter
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(location.pathname.startsWith("/admin")); // Periksa apakah pathname mengandung "/admin"
  }, [location.pathname]);

  return (
    <>
      {!admin && (
        <header className="h-14 border-b-4">
          <Header />
        </header>
      )}

      <main>
        <section className="max-w-full max-auto h-full">
          <Routes>
            <Route
              path="/"
              element={
                <WrapperHome>
                  <App />
                </WrapperHome>
              }
            />
            <Route
              path="/home"
              element={
                <WrapperHome>
                  <Home />
                </WrapperHome>
              }
            />
            <Route
              path="/Product/:id"
              element={
                <WrapperHome>
                  <ProductDetailPage />
                </WrapperHome>
              }
            />
            <Route
              path="/login"
              element={
                <WrapperHome>
                  <Login />
                </WrapperHome>
              }
            />

            <Route path="/admin">
              <Route path="products" element={<ProductManagementPage />} />
              <Route path="create/products" element={<CreateProductPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </main>

      {!admin && (
        <footer className="h-14 border-t-4 flex items-center justify-between font-bold px-10 mt-10">
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Router;
