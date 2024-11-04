import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 lg:px-48 py-12 md:py-20">
      <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:justify-between items-center space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Let's Connect</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Always excited to collaborate on new projects or challenges. Feel
            free to reach out to me through any platform below.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-xl">
            {[
              {
                href: "https://www.linkedin.com/in/yahampath-chandika/",
                icon: "fab fa-linkedin",
              },
              {
                href: "https://github.com/YahampathChandika",
                icon: "fab fa-github",
              },
              {
                href: "https://www.facebook.com/yahampath.2k",
                icon: "fab fa-facebook",
              },
              {
                href: "https://www.instagram.com/de_shuffler/",
                icon: "fab fa-instagram",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:neon-hover transition-all duration-300 text-3xl"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-6 justify-between w-10/12 md:w-1/3">
          {/* Email Card */}
          <div
            className="w-full md:w-1/2 bg-white p-8 md:p-6 rounded-xl flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 neon-hover neon-border shadow-neon relative"
            onClick={() => window.open("mailto:yhmpth@gmail.com", "_self")}
          >
            <span className="absolute top-3 left-3 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="flex flex-col text-black">
              <i className="far fa-envelope text-3xl md:text-4xl"></i>
              <p className="text-sm md:text-lg mt-4 font-semibold">
                yhmpth@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="w-full md:w-1/2 bg-white p-8 md:p-6 rounded-xl flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 neon-hover neon-border shadow-neon relative"
            onClick={() => window.open("tel:+94779817119", "_self")}
          >
            {/* Ping indicator positioned at the top left */}
            <span className="absolute top-3 left-3 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            {/* Card content */}
            <div className="flex flex-col text-black">
              <i className="fas fa-phone text-3xl md:text-4xl"></i>
              <p className="text-sm md:text-lg mt-4 font-semibold">
                +94 77 98 17 119
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Yahampath Chandika. All Rights Reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold hover:text-gray-400 transition duration-300"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
