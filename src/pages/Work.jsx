import React from "react";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

export default function Work() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
