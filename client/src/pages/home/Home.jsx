import React, { useEffect ,useState} from "react";
import homeCss from "./home.module.css";
import Navbar from "./../../componants/navbar/Navbar";
import HomeSlider from "../../componants/homeSlider/HomeSlider";
import  Categorise  from "../../componants/categories/Categorise";
import HomeProducts from "../../componants/homeProducts/HomeProducts";
import Footer from "../../componants/footer/Footer";
import axios from "axios";

 const Home = () => {


  ;
  return (
    <div className="">
      <Navbar />
      <HomeSlider />
      <Categorise />
      <HomeProducts />
      <Footer/>
    </div>
  );
};
export default Home;