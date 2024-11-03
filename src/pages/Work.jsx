import React from "react";
import Projects from "../components/work/Projects";
import Footer from "../components/common/Footer";
import Experience from "../components/work/Experience";
import Hero from "../components/work/Hero";
import Testimonials from "../components/work/Testimonials";

export default function Work() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}
