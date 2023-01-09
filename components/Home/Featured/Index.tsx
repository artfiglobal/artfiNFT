import { Card } from "@mantine/core";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./fetures.module.scss";
import GetStaticProps from "./types";

// interface Props {
//   featuredData: {
//     medialogo: string;
//     mediaurl: string;
//     IsActive: boolean;
//     createdAt: string;
//     mediatitle: string;
//     _id: string;
//     __v: number;
//   }[];
//   isWhite: boolean;
// }
// const images = [
//   {
//     src: "/Publiced/CNBC.svg",
//     // width:"120px"
//     link: "https://www.cnbctv18.com/startup/funding-rundownspotnana-raises-75-million-pricelabs-raises-30-million-atato-secures-6-million--shilpa-shetty-invests-in-fastup-and-chicnutrix-14303592.htm",
//   },
//   {
//     src: "/Publiced/Arabian Business.svg",
//     // width:"180px"
//     link: "https://www.arabianbusiness.com/money/wealth/alternative-assets/uae-investors-bet-on-indian-nft-startup-as-it-raises-3-2-million?fbclid=IwAR3hvsBMN5kGpnl-yA2Y3SY2v-8MQ0hqWEWMJfi6rPir1NzFZEReFzs4zSU",
//   },
//   {
//     src: "/Publiced/Times of India.svg",
//     // width:"180px"
//     link: "https://timesofindia.indiatimes.com/blogs/voices/how-does-india-fare-in-terms-of-fine-art-nfts/",
//   },
//   {
//     src: "/Publiced/Your Story.svg",
//     // width:"210px"
//     link: "https://yourstory.com/the-decrypting-story/nft-startup-artfi-funding-fine-arts-marketplace-web3-metaverse/amp",
//   },
//   {
//     src: "/Publiced/Financial Express.svg",
//     // width:"290px"
//     link: "https://www.financialexpress.com/blockchain/making-the-most-of-fine-art-as-a-digital-asset/2672227/",
//   },
//   {
//     src: "/Publiced/Gulf Today.svg",
//     // width:"260px"
//     link: "https://www.gulftoday.ae/business/2022/07/26/art-for-everyone-sculpting-with-technology-the-idea-of-democratising-the-$1-8-trillion-asset-class",
//   },
//   {
//     src: "/Publiced/Entrepeneur.svg",
//     // width:"200px"
//     link: "https://www.entrepreneur.com/article/432125",
//   },
//   {
//     src: "/Publiced/Business Insider.svg",
//     // width:"180px"
//     link: "https://www.google.com/amp/s/www.businessinsider.in/cryptocurrency/news/a-web3-startup-making-nfts-of-picasso-and-m-f-husain-art-receives-funding/amp_articleshow/93164882.cms",
//   },
//   {
//     src: "/Publiced/Forbes.svg",
//     // width:"180px"
//     link: "https://www.forbesindia.com/article/crypto-made-easy/web3-startup-making-nfts-of-picasso-and-hussains-art-receives-funding/78523/1",
//   },
//   {
//     src: "/Publiced/Gulf News.svg",
//     // width:"230px"
//     link: "https://gulfnews.com/amp/photos/business/photos-accolades-for-15-winners-at-gulf-news-web3-awards-2022-1.1656324319311",
//   },
//   {
//     src: "/Publiced/MoneyControl.svg",
//     // width:"100px"
//     link: "https://www.moneycontrol.com/news/business/cryptocurrency/nft-fractionalism-will-make-fine-art-popular-among-millennials-say-experts-9198551.html",
//   },
//   {
//     src: "/Logo/zh.svg",
//     // width:"180px"
//     link: "https://www.zerohedge.com/news/2022-10-20/investing-art-hedge-against-recession",
//   },
//   {
//     src: "/Logo/nb.svg",
//     // width:"180px"
//     link: "https://www.newsbtc.com/news/company/fractionalized-fine-art-ownership-is-taking-over-but-where-are-the-physical-artworks/",
//   },
//   {
//     src: "/Logo/bc.svg",
//     // width:"230px"
//     link: "https://bitcoinist.com/how-do-nfts-fit-with-fine-arts-traditional-gatekeepers/",
//   },
//   {
//     src: "/Logo/cg.svg",
//     // width:"100px"
//     link: "https://coingape.com/blog/3-fine-art-investment-platforms-you-should-put-on-your-radar/",
//   },
//   {
//     src: "/Logo/ts.svg",
//     // width:"180px"
//     link: "https://techstartups.com/2022/10/24/web3-startup-plans-simplify-fine-art-investing-nfts/",
//   },
//   {
//     src: "/Logo/ai.svg",
//     // width:"180px"
//     link: "https://www.analyticsinsight.net/6-nft-use-cases-in-2023/",
//   },
//   {
//     src: "/Logo/fm.svg",
//     // width:"230px"
//     link: "https://www.financemagnates.com/thought-leadership/the-future-lies-in-the-tokenization-of-real-world-assets-artfi-ceo-asif-kamal/",
//   },
//   {
//     src: "/Logo/tb.svg",
//     // width:"100px"
//     link: "https://techbullion.com/how-nfts-are-revolutionizing-the-blue-chip-fine-art-industry-for-art-lovers-interview-with-asif-kamal-founder-of-artfi/",
//   },
//   {
//     src: "/Publiced/hackernoor.svg",
//     link: "https://hackernoon.com/a-look-at-artfi-the-fine-art-investing-platform",
//   },
//   {
//     src: "/Publiced/tc.svg",
//     link: "https://cointelegraph.com/news/fractional-nfts-and-what-they-mean-for-investing-in-real-world-assets",
//   },
//   {
//     src: "/Publiced/gr.svg",
//     link: "https://www.nftgators.com/sheikha-hend-al-qassemi-jumps-on-the-nft-train-with-web3-art-startup-artfi/",
//   },
// ];
const Featured: React.FC<GetStaticProps> = ({ data }) => {
  // const { data } = featuredData;
  console.log(data, "data");
  return (
    <div className={styles.container}>
      <h1 className={styles.styleText}>Featured In</h1>

      <div className={styles.innerContainer}>
        {data?.length > 0 &&
          data?.map((item: any, index: any) => {
            return (
              <div key={index} className={styles.eachImg}>
                <a
                  target="_blank"
                  href={`http://${item.mediaurl}`}
                  className={styles.card}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${item.medialogo}`}
                    className={styles.img}
                  />
                  {/* </a> */}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Featured;
