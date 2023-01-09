import React from "react";
import { ContactPart } from "../components/contact";
import { Discover, Foundation, Market } from "../components/Home";
import { Footer, Head, Navigation } from "../components/reusables/Components";

const Contact = () => {
  return (
    <div>
      <Head title="Artfi |Contact" />
      <Navigation />
      
      {/* <Benefits /> */}
      <ContactPart/>
      <Footer display=""/>
    </div>
  );
};

export default Contact;
