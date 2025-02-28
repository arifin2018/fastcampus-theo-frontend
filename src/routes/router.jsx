import App from "@/App";
import WrapperHome from "@/components/layouts/wraps/wrapperHome";
import Footer from "@/components/pribadi/Footer";
import Header from "@/components/pribadi/Header";
import CreateProductPage from "@/pages/admin/CreateProductPage";
import EditProductPage from "@/pages/admin/EditProductPage";
import DeleteProductPage from "@/pages/admin/DeleteProductPage";
import ProductManagementPage from "@/pages/admin/ProductManagmentPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ProductDetailPage from "@/pages/ProductDetailPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router"; // Gunakan react-router-dom
import { Provider, useDispatch } from "react-redux";
import { legacy_createStore } from "redux";
import { store } from "@/stores/store";
import Counter from "@/pages/Counter";
import Register from "@/pages/Register";
import { Cart } from "@/pages/cart";
import { AdminPage } from "@/components/guards/AdminPage";

const globalStore = legacy_createStore(store);

const Router = () => {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

const Layout = () => {
  const location = useLocation(); // Gunakan useLocation di dalam BrowserRouter
  const [admin, setAdmin] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setAdmin(location.pathname.startsWith("/admin")); // Periksa apakah pathname mengandung "/admin"
  }, [location.pathname]);

  
  const checkUserLocalStorage = (data) =>{
      dispatch({
          type:"SET_USER_LOGIN",
          payload:{
              Username:data[0].Username,
              Role:data[0].role,
              Id:data[0].id,
          }
      })
  }


  useEffect(()=>{
      let checkUserLocalStorageVariable = localStorage.getItem("current-user")
      if (checkUserLocalStorageVariable != null) {
          checkUserLocalStorage(JSON.parse(checkUserLocalStorageVariable))
      }
  },[])

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
              path="/counter"
              element={
                <WrapperHome>
                  <Counter />
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
              path="/cart"
              element={
                <WrapperHome>
                  <Cart />
                </WrapperHome>
              }
            />
            <Route
              path="/product/:id"
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
            <Route
              path="/register"
              element={
                <WrapperHome>
                  <Register />
                </WrapperHome>
              }
            />

            {/* <Route path="/admin" element={<AdminPage />}> */}
            <Route path="/admin" element={<AdminPage />}>
              <Route path="products" element={<ProductManagementPage />} />
              <Route path="create/products" element={<CreateProductPage />} />
              <Route path="edit/products/:productID" element={<EditProductPage />} />
              <Route path="delete/products" element={<DeleteProductPage />} />
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
