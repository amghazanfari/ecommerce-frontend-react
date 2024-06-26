import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/auth/Dashboard";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreatePassword from "./views/auth/CreatePassword";
import StoreHeader from "./views/base/StoreHeader";
import StoreFooter from "./views/base/StoreFooter";
import Products from "./views/store/Products";
import ProductDetail from "./views/store/ProductDetail";
import Cart from "./views/store/Cart";
import Checkout from "./views/store/Checkout";
// import MainWrapper from "./layout/MainWrapper";

function App() {
  return (
    <BrowserRouter>
      <StoreHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-new-password" element={<CreatePassword />} />

        <Route path="/" element={<Products />} />
        <Route path="/detail/:slug/" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:order_oid/" element={<Checkout />} />
      </Routes>
      <StoreFooter />
    </BrowserRouter>
  );
}

export default App;
