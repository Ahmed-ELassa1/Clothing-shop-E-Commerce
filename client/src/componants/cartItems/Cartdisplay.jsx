import React from "react";
import cartCss from "./cart.module.css";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const Cartdisplay = () => {
  let { quantity } = useSelector((state) => state.cartSlice);
  let { wishlistQuantity } = useSelector((state) => state.wishlistRedux);
  return (
    <>
      <div className={"mx-0 " + cartCss.cart_items}>
        <h2 className="my-4 ms-5 "> your bag</h2>
        <div className="row  px-1 mx-0 justify-content-center">
          <Link to={"/productlist/1"} className={cartCss.shopping_btn}>
            <button className="">continue shopping</button>
          </Link>
          <div className={"col-md-8 col-sm-12 mx-0  " + cartCss.cart_list}>
            <Link to={"/cart/shopingbag"}>
              <p> shopping bag ({quantity})</p>
            </Link>
            <Link to={"/cart/wishlist"}>
              <p> your wishlist({wishlistQuantity})</p>
            </Link>
          </div>
          <div className={cartCss.checkout_btn}>
            <Link to={"/"} className="w-100">
              <button> Home</button>
            </Link>
          </div>
          <div className=""></div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Cartdisplay;
