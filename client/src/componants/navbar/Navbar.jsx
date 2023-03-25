import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarCss from "./navbar.module.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";

const Navbar = () => {
  let { products } = useSelector((state) => state.cartSlice);
  let { wishlistProducts } = useSelector(
    (state) => state.wishlistRedux
  );
  const [userLogin, setUserLogin] = useState(null);
  let [cartQantity, setCartQantity] = useState(0);

  async function logOut(e) {
    try {
      localStorage.clear("user");
      setUserLogin(null);
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      return;
    }
  }
  useEffect(() => {
    setCartQantity(JSON.parse(localStorage.getItem("cartProducts"))?.length);
    const navbar = document.getElementById("navbar");
    window.addEventListener(
      "scroll",
      (e) => (
        navbar.classList.add("position-sticky", "top-0", "zindex-dropdown"),
        window.scrollY > 10
          ? (navbar.style.backgroundColor = "#ffffffd3")
          : (navbar.style.backgroundColor = "white")
      )
    );
    setUserLogin(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <div className={"text-center " + navbarCss.offer}>
        <p>Super Deal! Free Shipping on Orders Over $50</p>
      </div>
      <div
        id="navbar"
        className={"row py-3 px-4 w-100 m-0 " + navbarCss.navbar}
      >
        <div className={"col-md-4 col-sm-12  " + navbarCss.navLeft}>
          <span className="fw-bold fa-1x">USA</span>
        </div>
        <div
          className={"col-md-4 col-sm-12 text-center " + navbarCss.navCenter}
        >
          <Link to={"/"} className="text-decoration-none">
            <span className="">mancera</span>
          </Link>
        </div>
        <div className={"col-md-4 col-s m-12 " + navbarCss.navRight}>
          {userLogin === null ? (
            <>
              {" "}
              <Link className="" to={"/register"}>
                register
              </Link>
              <Link className="" to={"/signin"}>
                sign in
              </Link>
            </>
          ) : (
            <button onClick={logOut} className="btn btn-dark">
              log out
            </button>
          )}

          <Link to={"/cart/wishlist"}>
            <div className={navbarCss.wishlist_Container}>
              <i className={"fa-solid fa-heart  " + navbarCss.wishlist}></i>
              <span className={navbarCss.cartIcon}>
                {wishlistProducts.length}
              </span>
            </div>
          </Link>
          <Link to={"/cart/shopingbag"}>
            <div className={navbarCss.cart_Container}>
              <i className={"fa-solid fa-cart-shopping " + navbarCss.cart}></i>
              <span className={navbarCss.cartIcon}>{products.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
