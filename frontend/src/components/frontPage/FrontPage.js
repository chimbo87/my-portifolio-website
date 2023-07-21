import React from "react";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import Vision from "../vision/Vision";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function FrontPage() {
  return (
    <div>
      <Home />
      <Skills />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default FrontPage;
