import "./App.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import Cart from "./pages/cart/Cart";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Reduc/store.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './componants/payment/PaymentForm';
import ShopingBag from './componants/cartItems/ShopingBag';
import Wishlist from './componants/cartItems/Wishlist';
export const key = "pk_test_51MlFy0BJDiZaC2Tr7I8wFG7Vu5IzrUqwGSot9uWwVm7ukjO5IG7XhhxSsaKsrN3zlzv52PLZ5CLcvKheKwXwvL2O00UR9UhomX"
export const stripePromise = loadStripe(key);
function App() {
  const routers = createHashRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/productlist/:categorie", element: <ProductList /> },
    { path: "/cart", element: <Cart />,children:[{
      path:"/cart/shopingbag",element:<ShopingBag/>
    },{
      path:"/cart/wishlist",element:<Wishlist/>
    }] },
    { path: "/signin", element: <Signin /> },
    { path: "/register", element: <Register /> },
    { path: "/payment", element: <PaymentForm /> },
  ]);
  return (
    <>
   <Elements stripe={stripePromise}>
        <Provider store={store}>
          <RouterProvider router={routers} />
          
        </Provider>
        </Elements>
    </>
  );
}

export default App;
