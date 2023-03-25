import React, { useEffect, useState } from "react";
import cartCss from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../Reduc/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { key, stripePromise } from "../../App";
import { Card } from "react-bootstrap";
import { getProductData } from "./../../api/products-detail";
import Swal from "sweetalert2/dist/sweetalert2.all.min";

const ShopingBag = () => {
  let { total, taxes, shipping, subTotal, products } = useSelector(
    (state) => state.cartSlice
  );
  let [productsData, setProductsData] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  let dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const [user, setUser] = useState("");

  const onToken = (token) => {
    setStripeToken(token);
  };

  productsData?.forEach((element) => {
    let sum = element.price * element.quantity;
    return (subTotal = subTotal + sum);
  });
  if (subTotal == 0) {
    shipping = 0;
  } else {
    shipping = 20;
  }
  taxes = subTotal * 0.1;
  total = taxes + subTotal + shipping;

  function purchaseSeccsee() {
    if (stripeToken != null) {
     productsData = []
      localStorage.removeItem("cartProducts");
      dispatch(
        removeProduct({
          products: [],
        })
        );
        setProductsData(JSON.parse(localStorage.getItem("cartProducts")));
        console.log(productsData);
      } else {
        return;
      }
      localStorage.setItem("cartProducts", JSON.stringify(productsData));
      setProductsData(JSON.parse(localStorage.getItem("cartProducts")));
  }

  function handleQuantites(type, id) {
    setProductsData(JSON.parse(localStorage.getItem("cartProducts")));
    let selectedProduct = productsData.filter((p) => p.id == id);
    if (type === "increase") {
      selectedProduct[0].quantity[0] =
        Number(selectedProduct[0].quantity[0]) + 1;
      setProductsData(productsData, selectedProduct);
      localStorage.setItem("cartProducts", JSON.stringify(productsData));
      setProductsData(JSON.parse(localStorage.getItem("cartProducts")));
    } else if (type === "decrease") {
      if (selectedProduct[0].quantity[0] == 1) {
        return;
      }
      selectedProduct[0].quantity[0] =
        Number(selectedProduct[0].quantity[0]) - 1;
      setProductsData(productsData, selectedProduct);
      localStorage.setItem("cartProducts", JSON.stringify(productsData));
      setProductsData(JSON.parse(localStorage.getItem("cartProducts")));
    }
  }

  function deleteProuct(id) {
    productsData = [...productsData.filter((item) => item.id != id)];
    localStorage.setItem("cartProducts", JSON.stringify(productsData));
    dispatch(
      removeProduct({
        products: [...productsData],
      })
    );
    setProductsData(productsData);
  }

  function loginPopup() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Must Sign In To Continue....!",
      footer: "<Link href={/signin}>Sign In Now</Link>",
    });
  }
  function totalEmpty() {
    Swal.fire({
      icon: "error",
      title: "Are You Stupid ?",
      text: "No Items In Your Cart To Buy....!",
    });
  }
  useEffect(() => {
      purchaseSeccsee();
    Promise.all(products?.map((p) => getProductData(p?.id))).then((res) => {
      const newProductsArr = res.map((p) => {
        const productQuan = products
          .filter((e) => e.id == p.id)
          .map((e) => e.quantity);
        p.quantity = productQuan;
        return p;
      });

      setProductsData(newProductsArr);
      localStorage.setItem("cartProducts", JSON.stringify(newProductsArr));
    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [stripeToken]);

  return (
    <>
      <div className={"row   mt-5 align-items-center " + cartCss.cart_purchase}>
        <div className={"col-md-9 col-sm-12 px-0 " + cartCss.cart_product_row}>
          {productsData?.length !== 0 ? (
            productsData.map((carts, i) => (
              <div
                key={i}
                className={"row mx-0 px-0 mb-4 " + cartCss.cart_one_product}
              >
                <div
                  className={
                    "col-md-3 col-sm-6 text-center " + cartCss.cart_product_img
                  }
                >
                  <img src={carts.images?.[0]} alt="" className=" my-4" />
                </div>
                <div
                  className={
                    "col-md-7 col-sm-12 " + cartCss.cart_product_details
                  }
                >
                  <h3>
                    product: <span>{carts.title} </span>
                  </h3>
                  <h3>
                    id: <span>{carts.id} </span>
                  </h3>
                  {/* <p></p> */}
                  <h3>
                    size: <span>42</span>
                  </h3>
                </div>
                <div className={"col-md-1 col-sm-12 " + cartCss.cart_count}>
                  <div className="col-12 mb-0 column">
                    <div className=" col-12 d-flex justify-content-center align-items-center">
                      <button
                        name="decrease"
                        id={carts.id}
                        onClick={(e) => {
                          handleQuantites(e.target.name, e.target.id);
                        }}
                      >
                        -
                      </button>
                      <p className="mx-2">{carts?.quantity[0]}</p>
                      <button
                        name="increase"
                        onClick={(e) => {
                          handleQuantites(e.target.name, carts.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mt-0 justify-content-center align-items-center mb-5 ">
                    <h3>${carts.price}</h3>
                    <button
                      onClick={() => deleteProuct(carts.id)}
                      className="btn  bg-danger text-uppercase fw-normal fs-5 mt-2 mb-0 mx-0 text-white"
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="col-md-12 ps-md-2 px-md-3 h-100">
                <Card
                  className={
                    "col-md-12  col-sm-12  d-flex  justify-content-center align-items-center h-100 " +
                    cartCss.emty_cart
                  }
                >
                  <Card.Title className="text-danger fs-3 text-capitalize">
                    your cart is empty
                  </Card.Title>
                </Card>
              </div>
            </>
          )}
        </div>

        <div
          className={
            "col-md-3 col-sm-12 py-3 px-3 my-4 " + cartCss.cart_summary
          }
        >
          <h2>order summary</h2>
          <div className="col-12 justify-content-between d-flex my-3">
            <span className={cartCss.purchase_details}>subtotal</span>
            <span className={cartCss.value}>${Math.ceil(subTotal)}</span>
          </div>
          <div className="col-12 justify-content-between d-flex my-3">
            <span className={cartCss.purchase_details}>taxes</span>
            <span className={cartCss.value}>${Math.ceil(taxes)}</span>
          </div>
          <div className="col-12 justify-content-between d-flex my-3">
            <span className={cartCss.purchase_details}>shipping</span>
            <span className={cartCss.value}>${Math.ceil(shipping)}</span>
          </div>
          <div
            className={
              "col-12 justify-content-between d-flex " + cartCss.purchase_total
            }
          >
            <span> total</span>
            <span>${Math.ceil(total)}</span>
          </div>
          <div className={"col-12  mt-3"}>
            {user == null ? (
              <button
                type="button"
                className={" w-100 " + cartCss.purchase_btn}
                onClick={loginPopup}
              >
                checkout now
              </button>
            ) : total != 0 ? (
              <StripeCheckout
                name="Mansera Shop"
                image="https://thumbs.dreamstime.com/z/brand-clothes-icon-simple-style-illustration-vector-web-design-isolated-white-background-130129990.jpg"
                billingAddress
                shippingAddress
                description={`Your Total is $${total}`}
                amount={total * 100}
                token={onToken}
                stripeKey={key}
              >
                <button
                  onClick={purchaseSeccsee}
                  className={" w-100 " + cartCss.purchase_btn}
                >
                  checkout now
                </button>
              </StripeCheckout>
            ) : (
              <button
                type="button"
                className={" w-100 " + cartCss.purchase_btn}
                onClick={totalEmpty}
              >
                checkout now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopingBag;
