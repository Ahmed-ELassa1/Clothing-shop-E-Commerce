import React, { useEffect, useState } from "react";
import productImg from "../../img/jean.jpg";
import productDetail from "./productDetails.module.css";
import { popularProducts } from "../../data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductDetail } from "./../../Reduc/productDetailSlice";
import { getProductData } from './../../api/products-detail';
import {
  addProduct,
  decreseQuantity,
  increseQuantity,
} from "../../Reduc/cartSlice";

const ProductDetails = () => {
  let { products, quantity, productQuantinty } = useSelector(
    (state) => state.cartSlice
  );
  const [productDetails, setProductDetails] = useState({});
  let dispatch = useDispatch();

  let { id } = useParams();

  function handleQuantity(type) {
    if (type === "decrese") {
      dispatch(decreseQuantity());
    } else if (type === "increse") {
      dispatch(increseQuantity());
    }
  }
  function handPurchase() {
    dispatch(
      addProduct({
        id: id,
        quantity: 1,
      })
    );
  }

  useEffect(() => {
    getProductData(id).then((res) => {
      console.log(res);
      setProductDetails(res);
    });

  }, []);
  return (
    <>
      {
        <div className="conatiner mt-5 p-0">
          <div className="d-flex mt-3 row w-100">
            <div
              className={
                "col-md-6 col-sm-12  mx-0 px-0 " + productDetail.product_img
              }
            >
              {<img src={`${productDetails?.images?.[0]}`} alt="" className="" />}
            </div>
            <div
              className={
                "col-md-6 col-sm-12 " + productDetail.product_content
              }
            >
              <h2 className="text-uppercase">{productDetails?.title}</h2>

              <h5 > {productDetails?.description}</h5>
              <h4 className="my-5">{`$ ${productDetails?.price}`}</h4>

              <div className=" row">
                <div
                  className={
                    "col-md-4 col-sm-12 d-flex mb-3 " + productDetail.product_colors
                  }
                >
                  <p>color</p>
                  <p className={"" + productDetail.black_product}></p>
                  <p className={productDetail.blue}></p>
                  <p className={productDetail.grey}></p>
                </div>
                <div
                  className={
                    "col-md-6 col-sm-12 d-flex  " + productDetail.product_size
                  }
                >
                  <p>size</p>
                  <select name="size" id="size">
                    <option value="xs"> xs</option>
                    <option value="s"> s</option>
                    <option value="m"> m</option>
                    <option value="xl"> xl</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5  d-flex">
                <div className={"col-md-4 col-sm-12 " + productDetail.purchase}>
                  <button
                    name="decrese"
                    onClick={(e) => handleQuantity(e.target.name)}
                  >
                    -
                  </button>
                  <p className="mx-2">{productQuantinty}</p>
                  <button
                    name="increse"
                    onClick={(e) => handleQuantity(e.target.name)}
                  >
                    +
                  </button>
                </div>
                <div
                  className={
                    "col-md-5 col-sm-12 " + productDetail.add_chart_btn
                  }
                >
                  <button onClick={handPurchase}>add to chart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default ProductDetails;
