import React from "react";
import Skills from "../components/info/Skills";
import AboutMe from "../components/info/AboutMe";
import Education from "../components/info/Education";
import Certificates from "../components/info/Certificates";

export default function Info() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Education /> 
      <Certificates />
    </div>
  );
}