import React from "react";

export default function Contact() {
  return (
    <div className="w-full px-6 md:px-20 lg:px-48 py-10 md:py-40 flex flex-col md:flex-row md:justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
        <p className="text-white text-4xl md:text-5xl font-bold">
          Get in Touch
        </p>
        <p className="text-white text-base md:text-lg mt-4 mb-8">
          I’m always open to new opportunities and challenges.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-6 text-3xl text-white">
          <a
            href="https://www.linkedin.com/in/yahampath-chandika/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-hover"
          >
            <i className="fab fa-linkedin cursor-pointer"></i>
          </a>
          <a
            href="https://github.com/YahampathChandika"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-hover"
          >
            <i className="fab fa-github cursor-pointer"></i>
          </a>
          <a
            href="https://www.facebook.com/yahampath.2k"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-hover"
          >
            <i className="fab fa-facebook cursor-pointer"></i>
          </a>
          <a
            href="https://www.instagram.com/de_shuffler/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-hover"
          >
            <i className="fab fa-instagram cursor-pointer"></i>
          </a>
        </div>
      </div>

      {/* Email Button */}
      <div
        className="w-full md:w-1/6 bg-white p-8 md:p-10 rounded-xl flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 neon-hover neon-border shadow-neon"
        onClick={() => window.open("mailto:yhmpth@gmail.com", "_self")}
      >
        <div className="flex flex-col text-black">
          <i className="far fa-envelope text-3xl md:text-4xl"></i>
          <p className="text-sm md:text-lg mt-4 font-semibold">
            yhmpth@gmail.com
          </p>
        </div>
      </div>

      {/* Phone Button */}
      <div
        className="w-full md:w-1/6 bg-white p-8 md:p-10 rounded-xl flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 neon-hover neon-border shadow-neon"
        onClick={() => window.open("tel:+94779817119", "_self")}
      >
        <div className="flex flex-col text-black">
          <i className="fas fa-phone text-3xl md:text-4xl"></i>
          <p className="text-sm md:text-lg mt-4 font-semibold">
            +94 77 98 17 119
          </p>
        </div>
      </div>
    </div>
  );
}
