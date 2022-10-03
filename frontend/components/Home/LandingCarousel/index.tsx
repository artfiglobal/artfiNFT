/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./LandingCarousel.module.scss";

type LandingCarouselProps = {};

export const LandingCarousel = ({}: LandingCarouselProps): JSX.Element => {
  return (
    <div className={style.carousel}>
      {/* <div className={style.carouselTimer}>
        <Timer seconds={40000} />
      </div> */}
      <Carousel
        autoPlay={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img src="/images/carousel.jpg" alt="" />
        </div>
        <div>
          <img src="/images/carousel.jpg" alt="" />
        </div>
        <div>
          <img src="/images/carousel.jpg" alt="" />
        </div>
        <div>
          <img src="/images/carousel.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
