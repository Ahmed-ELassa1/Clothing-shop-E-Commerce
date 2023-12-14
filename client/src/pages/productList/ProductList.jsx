import React, { useEffect } from "react";
import productsDisplay from "./productsDisplay.module.css";
import Navbar from "./../../componants/navbar/Navbar";
import Footer from "./../../componants/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Reduc/cartSlice";
import { addProductToWish } from "../../Reduc/wishlist Redux";
import product from "../../componants/homeProducts/products.module.css";
import { getProductsByCategories } from "../../Reduc/productCategories";

const ProductList = () => {
  let dispatch = useDispatch();
  const { categorie } = useParams();
  let { productListCategory } = useSelector(
    (state) => state.productCategorySlice
  );
  let [selectInput, setSelectInput] = useState("");
  let [filters, setFilters] = useState({});
  let [sortedProducts, setSortedProducts] = useState([]);
  let [sort, setSort] = useState("newest");
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
  function handleFiltering(e) {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }

  function handleSelectChange(e) {
    setSelectInput(e.target.value);
    if (e?.target?.value == "price-high") {
      const productsDsc = [...productListCategory]?.sort((a, b) => {
        return b.price - a.price;
      });
      setSortedProducts(productsDsc);
    } else if (e?.target?.value == "price-low") {
      const productsDsc = [...productListCategory]?.sort((a, b) => {
        return a.price - b.price;
      });
      setSortedProducts(productsDsc);
    } else {
      setSortedProducts([]);
    }
  }
  function handleSorting(e) {
    setSort(e.target.value);
    if (e.target.value == "price-high") {
    }
  }

  useEffect(() => {
    dispatch(getProductsByCategories(categorie));
  }, []);
  return (
    <>
      <Navbar />

      <div className="conatiner py-4 px-4">
        {/* product title*/}
        <div className="text-start text-capitalize">
          <p className="text-capitalize fw-bold fs-3 mb-5">
            {productListCategory[0]?.category.name}
          </p>
        </div>

        {/* filtering and sorting*/}

        <div className={productsDisplay.display_options}>
          {/* <div className="d-flex">
            <h4>filter products: </h4>
            <select
              name="color"
              onChange={handleFiltering}
              className={productsDisplay.products_filtering}
            >
              <option disabled > color</option>
              <option value="white"> white</option>
              <option value="black"> black</option>
              <option value="red"> red</option>
              <option value="blue"> blue</option>
              <option value="yellow"> yellow</option>
            </select>
            <select
            name="size"
            onChange={handleFiltering}
            className={productsDisplay.products_sizing}
            >
              <option disabled> size</option>
              <option value="xs"> xs</option>
              <option value="s"> s</option>
              <option value="m"> m</option>
              <option value="xl"> xl</option>
            </select>
          </div> */}

          <div className="d-flex">
            <h4>sort products: </h4>
            <select
              onChange={(e) => handleSelectChange(e)}
              id="sort"
              className={productsDisplay.products_sizing}
              value={selectInput}
            >
              <option value="newest"> newest</option>
              <option value="price-low"> price (asc)</option>
              <option value="price-high"> price (desc)</option>
            </select>
          </div>
        </div>
        {/* display products*/}
        <div className="my-5">
          <div className={"row px-3 w-100 " + product.products_list}>
            {sortedProducts.length
              ? sortedProducts?.map((products, i) => (
                  <div key={i} className={product.product}>
                    <div className={product.circle}></div>
                    <img src={`${products.image}`} alt="" />
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
              : productListCategory?.map((products, i) => (
                  <div key={i} className={product.product}>
                    <div className={product.circle}></div>
                    <img src={`${products.image}`} alt="" />
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
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProductList;
