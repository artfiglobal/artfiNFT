import React from "react";
import { Typography } from "../components/reusables/Atoms";
import { Footer, Head, Navigation } from "../components/reusables/Components";
import Link from "next/link";
import style from "../styles/about.module.scss";

const projects = () => {
  return (
    <div className={style.projects}>
      <Head title="Artfi | About" />
      <Navigation />
      <main className={style.main}>
        <Typography color="black" variant="heading">
          Redefining Fine Art Ownership
        </Typography>
      </main>

      <section className={style.intro}>
        <Typography color="black" variant="subheading">
          Artfi is a financial and art technology company on a mission to
          democratize the $1.7 trillion fine art and collectibles market. By
          harnessing the power of NFTs and blockchain technology, Artfi allows
          investors to own a stake in some of the world&apos;s most sought-after
          works of art.
        </Typography>
        <Typography color="black" variant="subheading">
          The financial industry is currently at the precipice of a seismic
          shift towards the tokenization of all assets. Artfi is operating at
          the vanguard of this generation-defining process to redistribute fine
          art ownership through the tokenization and fractionalization of
          physical works of blue chip fine art.
        </Typography>
        <Typography color="black" variant="subheading">
          Artfi is run by a renowned team of experienced art and technology
          professionals with the bold vision of ushering in a new paradigm for
          collecting, owning and investing in art.
        </Typography>
        {/* <ul>
          <li></li>
          <li>
            The financial industry is currently at the precipice of a seismic
            shift towards the tokenization of all assets. Artfi is operating at
            the vanguard of this generation-defining process to redistribute
            fine art ownership through the tokenization and fractionalization of
            physical works of blue chip fine art.
          </li>
          <li>
            Artfi is run by a renowned team of experienced art and technology
            professionals with the bold vision of ushering in a new paradigm for
            collecting, owning and investing in art.
          </li>
        </ul> */}
      </section>

      <section className={style.intro}>
        <div className={style.introTitle}>
          <Typography color="black" variant="heading">
            Built on Polygon
          </Typography>
          <img src="/images/reusables/polygonBlack.png" alt="Polygon logo" />
        </div>
        <ul>
          <li>Artfi is proud to be built on Polygon.</li>
          <li>
            Polygon is the premiere Layer 2 scaling solution for the Ethereum
            blockchain, and is known for its speed, security, and convenience.
            Polygon&apos;s gas fees are some of the lowest in the entire crypto
            universe.
          </li>
          <li>
            The Polygon blockchain is an environmental leader and has committed
            to going carbon-negative. You can read Polygon&apos;s Green
            Manifesto{" "}
            <Link
              href="https://blog.polygon.technology/our-green-manifesto/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                here
              </a>
            </Link>{" "}
            .
          </li>
          <li>
            Ethereum has established itself as the most trusted decentralized
            smart contract platform in the world. By virtue of being built on
            Polygon, Artfi is positioned to participate in Ethereum&apos;s
            continued adoption while offering NFT users an easy bridge on and
            off the mainnet.
          </li>
        </ul>
      </section>

      {/* <section className={style.intro}>
        <Typography color="black" variant="heading">
          Introduction
        </Typography>
        <ul>
          <li>
            Collecting & Investing in the world&apos;s greatest art pieces has
            been a privilege enjoyed by a select few. The journey of the art and
            the stories it tells has been dictated by the elite community.
          </li>
          <li>
            This changes with Artfi. Artfi is the world&apos;s fastest-growing
            community of artists, art connoisseurs, and art investors on a
            mission to democratize art ownership through blockchain & NFTs.
          </li>
          <li>
            Reshaping ownership proofs, royalties and fractionalizing ownership
            in the fine-art market is one of the clearest real-world uses for
            blockchain.
          </li>
          <li>
            Artfi makes discovering, collecting, and investing in the
            world&apos;s greatest work of art - EASY.
          </li>
          <li>
            Right from owning a part of the multi-million dollar art piece to
            diversifying your investment portfolio - Artfi serves the purpose of
            various interests in the segment of fine art.
          </li>
        </ul>
      </section>
      <section className={style.vision}>
        <Typography color="black" variant="heading">
          Vision & Mission
        </Typography>
        <p>
          Artfi is a platform that will for the first time in history-empower a
          large community to engage directly in the art market on a level
          playing field with some of the market&apos;s most powerful artists. As
          Artfi acquires more paintings, the community will be able to make its
          own collecting decisions according to its tastes and convictions. Our
          vision is to leverage blockchain and non-fungible tokens (NFTs) to
          radically change the way people Discover, Collect and Invest in the
          world&apos;s greatest artworks powered by blockchain and NFTs and
          ultimately enjoy art.
        </p>
      </section>
      <section className={style.discover}>
        <Typography color="black" variant="heading">
          Who We Are
        </Typography>
        <Typography color="black" variant="subheading">
          Discover, Collect & Invest
        </Typography>
        <ul>
          <li>
            Collecting & investing in the world&apos;s greatest art pieces has
            been a privilege enjoyed by a select few. The journey of the art and
            the stories it tells has been dictated by the elite community.
          </li>
          <li>
            This changes with Artfi. Artfi is the world&apos;s fastest-growing
            community of artists, art connoisseurs, and art investors on a
            mission to democratize art ownership through blockchain & NFTs.
          </li>
          <li>
            Artfi is Bringing the Fine Arts Community onto Blockchain,
            Challenging the orthodox ways of buying and selling art. Our mission
            is to democratize the art market by offering small investors access
            to the world&apos;s largest asset class.
          </li>
          <li>
            We are inviting investors to join an exclusive community investing
            in NFTs of blue-chip fine art. We are building the platform for a
            wider range of investors to invest in multimillion-dollar paintings.
          </li>
        </ul>
      </section>
      <section className={style.foundation}>
        <Typography color="black" variant="heading">
          The Artfi Foundation
        </Typography>
        <p>
          Experience the art you own virtually in the real world! The physical
          artworks owned by the Artfi community will be on display at the Artfi
          Foundation, a non-profit public trust and physical museum designed
          with the purpose to let the Artfi community experience art in real
          life. Every artwork acquired by the Artfi community will be
          immediately installed at our museums and will never be sold.
        </p>
        <p>
          Artfi Foundation will also develop a museum in the Metaverse where the
          collection will always be accessible
        </p>
      </section>
      <section className={style.foundation}>
        <Typography color="black" variant="heading">
          A New Way to Discover, Collect & Invest in Art
        </Typography>
        <p>
          Reshaping Ownership proofs, royalties, and fractionalized ownership in
          the fine art market is one of the blockchain&apos;s clearest
          real-world use cases. Making art collecting easy enabled by Blockchain
          and NFT. Widening the Participation by extending NFTs to physical art
          collecting and Ownership.
        </p>
      </section>
      <section className={style.fraction}>
        <Typography color="black" variant="heading">
          Fractionalisation
        </Typography>
        <ul>
          <li>
            Each painting is fractionalized into limited edition NFTs, which
            anyone can purchase with their digital wallet.
          </li>
          <li>
            Within the overarching structure of collective ownership, each
            fraction is unique, allowing the holder to experience a personal
            relationship to the artwork.
          </li>
          <li>
            While each fraction is distinct, it should always be viewed as a
            component of the whole. We encourage you to acquire additional NFTs
            if you have a strong belief in a certain artwork.
          </li>
          <li>
            NFTs can be traded openly on the Artfi Marketplace and other
            secondary markets.
          </li>
          <li>
            Each NFT includes a collector&apos;s card as well as a well defined
            basket of rights in regard to the artwork.
          </li>
        </ul>
      </section>
      <section className={style.blockchain}>
        <Typography color="black" variant="heading">
          Blockchain partner
        </Typography>
        <ul>
          <li>
            We are proud to announce our selection of the Polygon chain as an
            Artfi blockchain partner.
          </li>
          <li>
            Polygon provides an L2 (layer 2) solution for the Ethereum
            blockchain, allowing developers to easily integrate the blockchain
            without sacrificing their ETH-built projects.
          </li>
          <li>
            Polygon&apos;s ZK roll-ups provide the most advanced scaling
            solutions in blockchain technology today. Their blockchain is 100%
            eco-friendly producing one of the lowest blockchain footprints.
          </li>
          <li>
            Transactions can be executed in lightning-fast times and there are
            next to 0 gas fees. Polygon has experienced massive growth in the
            NFT and crypto gaming sectors with over 100,000 blockchain gamers
            having made the jump from ETH to Polygon.
          </li>
          <li>
            Considering Ethereum is the biggest decentralized blockchain network
            to date, Polygon wishes to provide an effective solution to the
            frustrations ETH users face through our own ecosystem.
          </li>
        </ul>
      </section> */}

      <Footer display=""/>
    </div>
  );
};

export default projects;
