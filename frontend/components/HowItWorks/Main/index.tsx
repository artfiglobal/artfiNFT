import { Typography } from "../../reusables/Atoms";
import styles from "./Main.module.scss";
import WideCard from "./WideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Main = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Typography variant="heading" color="black">
          How it works
        </Typography>
        <Typography variant="body" color="black">
          Artfi is a Web3 solution for investing in fine art. The company
          tokenizes prominent high-value artworks as NFTs which are then sold to
          the public. By owning Artfi NFTs, investors can gain access to the
          exclusive blue chip fine art market and diversity their portfolios -
          all through the speed, security, and comfort of the Polygon
          blockchain.
        </Typography>
      </div>

      <div className={styles.cards}>
        <WideCard
          ltr={true}
          title="Selection"
          description="Our world-class art experts draw on their deep knowledge to select a distinguished a work of art to acquire."
          background="/images/HowItWorks/Selection.png"
        />
        <WideCard
          ltr={false}
          title="Acquisition"
          description="Artfi acquires the artwork on consignment from the seller. Only works of impeccable provenance are accepted as part of the Artfi collection."
          background="/images/HowItWorks/Acquisition.png"
        />
        <WideCard
          ltr={true}
          title="Fractionalisation"
          description="Artfi mints 10,000 NFTs that represent an ownership stake in the physical work of art. The artwork is custodied and displayed by the Artfi Museum on behalf of all NFT holders"
          background="/images/HowItWorks/Fractionalisation.png"
        />
        <WideCard
          ltr={false}
          title="Trade or Hold"
          description="The NFTs are liquid and can be traded on the secondary at any time. NFT holders will receive a portion of royalties on all trades and will have the option to stake their NFTs for additional rewards."
          background="/images/HowItWorks/Hold_or_Trade.png"
        />
        <WideCard
          ltr={true}
          title="Sale"
          description="After an extended period of time, and when the market conditions are advantageous, Artfi’s team of experienced art market professionals may decide to sell the artwork. Proceeds from the sale will be distributed to all NFT holders in exchange for the NFTs being burned."
          background="/images/HowItWorks/Sale_Good.png"
        />
      </div>

      <div className={styles.royalties}>
        <Typography variant="heading" color="white">
          Royalties & More
        </Typography>
        <div className={styles.swiperContainer}>
          <Swiper
            spaceBetween={40}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={pagination}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              1300: {
                spaceBetween: 80,
              },
            }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.slide}>
              <Typography variant="subheading" color="white">
                Royalties
              </Typography>
              <Typography variant="body" color="white">
                Whoever consigns a painting with Artfi to be fractionalized as
                NFTs will receive royalties every time the NFTs are traded. Now
                artists and collectors looking to sell their artworks can
                benefit from royalties for life.
              </Typography>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Typography variant="subheading" color="white">
                Minter Royalties
              </Typography>
              <Typography variant="body" color="white">
                Whoever mints an Artfi NFT from the primary sale will receive
                royalties whenever the NFT gets traded on the secondary market.
              </Typography>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Typography variant="subheading" color="white">
                Community Royalties
              </Typography>
              <Typography variant="body" color="white">
                All Artfi NFT holders will receive royalties on the trading
                volume of Artfi NFTs. All you have to do is be a part of the
                community by holding an Artfi NFT!
              </Typography>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Typography variant="subheading" color="white">
                Partial Selling Opportunity
              </Typography>
              <Typography variant="body" color="white">
                Artfi is introducing a partial selling opportunity for physical
                works of art. For example, sellers can retain 10% of their
                canvas for future upside, while selling the remaining 90%.
              </Typography>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Main;
