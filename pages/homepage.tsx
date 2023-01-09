import React from "react";
import Featured from "../components/Home/Featured/Index";
import { Navigation, Head } from "../components/reusables/Components";
import { Footer } from "../components/reusables/Components/Footer2";
import Video from "../components/video/Video";
const homepage = () => {
  return (
    <div>
      <Head title="home" />
      <Navigation />
      <Video />
      {/* <Featured /> */}
      <Footer />
    </div>
  );
};

export default homepage;
