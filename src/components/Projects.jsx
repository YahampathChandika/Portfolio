import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gitHub from "../assets/images/github.png";
import projectsData from "../assets/data/projectsData.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const controls = useAnimation(); // For responsive animations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setProjects(projectsData);

    // Detect mobile view
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check once on component load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const PrevArrow = ({ onClick }) => (
    <span
      className="hidden material-symbols-outlined absolute w-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 left-2"
      onClick={onClick}
    >
      keyboard_arrow_left
    </span>
  );

  const NextArrow = ({ onClick }) => (
    <span
      className="hidden material-symbols-outlined absolute w-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 right-2"
      onClick={onClick}
    >
      keyboard_arrow_right
    </span>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  return (
    <div className="bg-black w-full py-20 px-8 md:px-40 flex flex-col items-center justify-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="w-full py-10 px-6 md:px-12 text-white rounded-2xl shadow-neon neon-border mb-12"
          initial={
            isMobile
              ? { y: 50, opacity: 0 } // Uniform slide-up animation for mobile
              : { x: index % 2 === 0 ? -200 : 200, opacity: 0 } // Alternate for desktop
          }
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={
            isMobile
              ? { once: false, amount: 0.2 }
              : { once: false, amount: 0.5 }
          }
        >
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold text-2xl md:text-3xl">
              {project.title}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2">
              <Slider {...sliderSettings}>
                {project.images.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image}
                      alt={`Project Snapshot ${idx + 1}`}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="w-full md:w-1/2 text-gray-400">
              <p className="text-base md:text-xl mb-6">{project.description}</p>

              <div className="mb-4">
                <h3 className="text-base md:text-xl font-semibold mb-2">
                  Key Features
                </h3>
                <ul className="text-sm md:text-lg list-disc list-inside space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-base md:text-xl font-semibold mb-2">
                  Tech Stack
                </h3>
                <p className="text-sm md:text-lg">
                  {project.techStack.join(" | ")}
                </p>
              </div>

              <div className="flex space-x-6 md:space-x-12 justify-between md:justify-end mt-8">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer transition-all neon-hover"
                >
                  <img
                    src={gitHub}
                    alt="GitHub"
                    className="w-6 md:w-10 h-6 md:h-10 rounded-full border border-gray-300"
                  />
                  <p className="ml-2 md:ml-4">Code</p>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer transition-all neon-hover"
                >
                  <span className="material-symbols-outlined text-xl md:text-3xl rounded-full border border-gray-300 w-6 md:w-10 h-6 md:h-10 flex items-center justify-center">
                    laptop_mac
                  </span>
                  <p className="ml-2 md:ml-4">Demo</p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
