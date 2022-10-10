import React from "react";
import { Discover, Foundation, Market } from "../components/Home";
import { Footer, Head, Navigation } from "../components/reusables/Components";

const Project = () => {
  return (
    <div>
      <Head title="Artfi | Project" />
      <Navigation />
      <Discover />
      <Market />
      {/* <Benefits /> */}
      <Foundation />
      <Footer />
    </div>
  );
};

export default Project;
