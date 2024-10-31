import React from "react";
import heroImg from "../assets/images/hero.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed -mt-32"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "70% 50%",
      }}
    >
      {/* <style jsx>{`
        @media (min-width: 768px) {
          section {
            background-position: 5% 0%; // Adjust for larger screens
          }
        }
      `}</style> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />
      <div className="relative text-left w-10/12  p-5 md:p-10 mx-auto z-10">
        <h1 className="text-white text-3xl md:text-7xl font-bold leading-tight mb-4  animate-pulse">
          Hi, I’m Yahampath
        </h1>
        <p className="text-gray-300 text-base md:text-2xl mb-6">
          A Full-Stack Developer creating functional and aesthetic digital
          solutions.
        </p>
        <p className="text-gray-400 text-sm md:text-lg italic">
          "Turning ideas into responsive, functional designs."
        </p>
        {/* <div className="flex justify-start gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-md shadow-lg transition-transform transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-gray-300 text-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div> */}
      </div>
      <div
        className="absolute bottom-20 cursor-pointer"
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight * 0.85,
            behavior: "smooth",
          })
        }
      >
        <div className="animate-bounce text-gray-400 text-center">
          <span className="material-symbols-outlined text-4xl">
            expand_more
          </span>
        </div>
        <p className="text-gray-400">Scroll Down</p>
      </div>
    </section>
  );
}
