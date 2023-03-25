import React, { useEffect } from "react";
import product from "./products.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./../../Reduc/productListSlice";
import { getProductDetail } from "./../../Reduc/productDetailSlice";
import { addProduct } from "../../Reduc/cartSlice";
import { addProductToWish } from "../../Reduc/wishlist Redux";

const HomeProducts = () => {
  let dispatch = useDispatch();
  let { productList } = useSelector((state) => state.productListSlice);
let {categorie}= useParams()
  function handPurchase(id) {
    dispatch(
      addProduct({
        id: id,
        quantity: 1,
      })
    );
  }

  function handleWishlist(id) {
      dispatch(
        addProductToWish({
          id: id,
        })
      );
    
  }
  useEffect(() => {
    console.log(categorie);
    dispatch(getProducts(categorie));
  }, []);
  return (
    <>
      <div className="w-100">
        <div className={"row px-4 " + product.products_list}>
          {productList != null
            ? productList
                .map((products, i) => (
                  <div key={i} className={product.product}>
                    <div className={product.circle}></div>
                    <img src={`${products.images[0]}`} alt="" />
              
                    <div
                      className={"col-md-3  col-sm-6 " + product.overly}
                    ></div>

                    <div className={product.icons_container}>
                      <div className={"m-2 " + product.icon_background}>
                        <i
                          onClick={() => handPurchase(products.id)}
                          className="fa-solid fa-cart-shopping"
                        ></i>
                      </div>
                      <Link
                    
                        to={`/product/${products.id}`}
                        className="text-decoration-none"
                      >
                        <div className={"m-2 " + product.icon_background}>
                          <i className="fa-solid fa-magnifying-glass"></i>{" "}
                        </div>
                      </Link>

                      <div className={"m-2 " + product.icon_background}>
                        <i
                          onClick={() => handleWishlist(products.id)}
                          className="fa-solid fa-heart"
                        ></i>
                      </div>
                    </div>
                  </div>
                ))
                .slice(1, 13)
            : ""}
        </div>
      </div>
    </>
  );
};
export default HomeProducts;
