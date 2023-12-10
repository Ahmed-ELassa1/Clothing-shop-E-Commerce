import React from "react";
import sliderCss from "./slider.module.css";
import { slideItems } from "../../data";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const HomeSlider = () => {
  return (
    <>
      <div className={sliderCss.slider}>
        <Carousel
          className=" "
          indicators={false}
          variant={"dark"}
          bsPrefix={"carousel"}
        >
          {slideItems.map((slide, i) => (
            <Carousel.Item key={i} className={sliderCss.active}>
              <img
                src={slide.imag}
                className={"col-md-5 col-sm-12 " + sliderCss.img}
                alt="slide.imag"
              />
              <Carousel.Caption>
                <div
                  className={"col-md-7 col-sm-12 " + sliderCss.slide_content}
                >
                  <h2>{slide.title}</h2>
                  <p>{slide.para}</p>
                  <Link to={"/productlist/summe"}>
                    <button>shop now</button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeSlider;
