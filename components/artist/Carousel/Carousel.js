import Image from "next/image";
import arrowRight from "../../../public/Icons/arrowRight.svg";
import arrowLeft from "../../../public/Icons/arrowLeft.svg";
import React from "react";
// import Slick from "../../Slick/Slick";
import styles from "./Carousel.module.scss";
// const image = ["/Artist/slider1.svg", "/Artist/slider1.svg"];
import cls from "classnames";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ artistDetails }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={cls(styles.arrow, styles.next)} onClick={onClick}>
        {/* <img src={arrowRight} alt="" className={styles.right_direction} /> */}
        <div className={styles.right_direction}>
          <SlArrowRight />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={cls(styles.arrow, styles.prev)} onClick={onClick}>
        {/* <img src={arrowLeft} alt="" className={styles.left_direction} /> */}
        <div className={styles.left_direction}>
          <SlArrowLeft />
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className={styles.carouselTitle}>Highlights</h1>
      <Slider className={styles.slider_component} {...settings}>
        {artistDetails?.highlight?.map((item, index) => (
          <Image
            key={index}
            className={styles.highlight}
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${item.highlightsImage}`}
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
