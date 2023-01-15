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
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
      <section className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image" />
                <div>Cơ xương khớp</div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Specialty);
