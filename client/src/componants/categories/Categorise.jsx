import React from "react";
import CateCss from "./categories.module.css";
import { categories } from "../../data";
import { Link } from 'react-router-dom';
const Categorise = () => {
  const categ = [1,4,2]
  return (
    <div>
      <div className="conatiner row mx-3 my-5">
        {categories.map((categorie, i) => (
          <div key={i} className={"col-md-4 col-sm-12 m-0 " + CateCss.card}>
            <img src={categorie.img} alt="" />
            <div className={CateCss.card_content}>
              <h3>{categorie.title}</h3>
              <Link to={`/productlist/${categ[i]}`}>
              <button>shop now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categorise;
