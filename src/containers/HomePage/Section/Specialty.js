import React, { memo } from "react";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Specialty() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="section-specialty">
        <div className="specialty-content">
          <Slider {...settings}>
            <div className="img-customize">
              <h3>1</h3>
            </div>
            <div className="img-customize">
              <h3>2</h3>
            </div>
            <div className="img-customize">
              <h3>3</h3>
            </div>
            <div className="img-customize">
              <h3>4</h3>
            </div>
            <div className="img-customize">
              <h3>5</h3>
            </div>
            <div className="img-customize">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default memo(Specialty);
