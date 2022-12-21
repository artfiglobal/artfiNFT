/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./LandingCarousel.module.scss";
import { Button, Divider } from "@mui/material";

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
      <Divider />

      <div className={style.get}>
        <h4>WHAT YOU’LL GET</h4>
        <h3>Artfi NFT</h3>
        <Button
          variant="outlined"
          color="primary"
          style={{ color: "#4527B3", border: "1px solid #4527B3" }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default LandingCarousel;
