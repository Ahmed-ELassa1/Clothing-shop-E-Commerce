import React, { useState } from "react";
import cartCss from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Reduc/cartSlice";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { removeProductFromWish } from "../../Reduc/wishlist Redux";
import { getProductData } from "./../../api/products-detail";

const Wishlist = () => {
  let { wishlistProducts } = useSelector(
    (state) => state.wishlistRedux
  );

  let [wishlistData, setWishlistData] = useState(
    JSON.parse(localStorage.getItem("wishlistProducts")) || []
  );

  let dispatch = useDispatch();

  function handPurchase(id) {
    dispatch(
      addProduct({
        id: id,
        quantity: 1,
      })
    );
    deleteProucts(id);
  }

  function deleteProucts(id) {
    wishlistProducts = [
      ...wishlistProducts.filter((item) => item.id != id),
    ];
    localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
    dispatch(
      removeProductFromWish({
        wishlistProducts: [...wishlistProducts],
      })
      );
      setWishlistData(wishlistProducts)
      localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
  }

  useEffect(() => {
    Promise.all(wishlistProducts?.map((p) => getProductData(p?.id)))
      .then((res) => {
        localStorage.setItem("wishlistProducts", JSON.stringify(res));
        setWishlistData(res);
      })
  }, []);
  return (
    <>
      <div className={"w-100 px-4 "}>
        {wishlistData?.length !== 0 ? (
          wishlistData.map((whishlist, i) => (
            <div
              key={i}
              className={"row mx-0 px-4 mb-4 " + cartCss.cart_one_product}
            >
              <div className={"col-md-3 col-sm-6 text-center mb-4 " + cartCss.cart_product_img}>
                <img
                  src={whishlist.images?.[0]}
                  alt=""
                  className="w-75"
                />
              </div>
              <div
                className={"col-md-7 col-sm-12 " + cartCss.cart_product_details}
              >
                <h3>
                  product: <span>{whishlist.title} </span>
                </h3>
                <h3>
                  id: <span>{whishlist.id} </span>
                </h3>
                <h3>
                  size: <span>42</span>
                </h3>
              </div>
              <div className={"col-md-2 col-sm-12 " + cartCss.cart_count}>
                <div className="col-12 mt-0 d-flex row justify-content-center align-items-center mb-5 ">
                  <h3>${whishlist.price}</h3>
                  <button
                    id={whishlist.id}
                    onClick={(e) => deleteProucts(e.target.id)}
                    className="btn  bg-danger text-uppercase fw-normal fs-5 mt-2 mb-0 mx-0 text-white"
                  >
                    remove
                  </button>
                  <button
                    id={whishlist.id}
                    onClick={(e) => handPurchase(e.target.id)}
                    className="btn  bg-info text-uppercase fw-normal fs-5 mt-2 mb-0 mx-0 text-white"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <Card className={"my-4 d-flex  justify-content-center align-items-center "+ cartCss.wishlist_content}>
              <Card.Title className="text-danger fs-3 text-capitalize">
                your wishlist is empty
              </Card.Title>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default Wishlist;
