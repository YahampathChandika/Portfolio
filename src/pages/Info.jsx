import React, { useEffect } from "react";
import Skills from "../components/info/Skills";
import AboutMe from "../components/info/AboutMe";
import Education from "../components/info/Education";
import ExtraCurricular from "../components/info/ExtraCurricular";
import Certificates from "../components/info/Certificates";
import Footer from "../components/common/Footer";

export default function Info() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutMe />
      <Skills />
      <Education />
      <Certificates />
      <ExtraCurricular />
      <Footer />
    </div>
  );
}
