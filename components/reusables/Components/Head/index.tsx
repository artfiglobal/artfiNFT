import Head from "next/head";

type HeadProps = {
  title: string;
};

export const CustomHead = ({ title }: HeadProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="stylesheet" type="text/css" href="https://fonts.cdnfonts.com/css/playfair-display-sc" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Artfi Global" />
      <meta
        name="description"
        content="Discover, collect & invest in the world's greatest artworks powered by blockchain and NFTs. Democratizing art ownership, powered by 
        @Polygonstudios"
      />
      <meta
        name="keywords"
        content="
      NFT,
      Digital Painting,
      Fractionalisation,
      Artist,
      Artfi,
      artfiglobal,
      artwork,
      Blockchain,
      art ownership,
      polygon,"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:image"
        content="/Background/Thumbnail.png"
      />
       <meta
        property="og:description"
        content="Discover, collect & invest in the world's greatest artworks powered by blockchain and NFTs. Democratizing art ownership, powered by 
        @Polygonstudios"
      />
   
    </Head>
  );
};

export default CustomHead;
