// import React from "react";
// import Slider from "react-slick"; // Carousel library
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import gitHub from "../assets/images/github.png";
// export default function Projects() {
//   const projectImages = [
//     "https://blog.openreplay.com/images/creating-a-simple-carousel-with-react-slick/images/hero.png",
//     "https://blog.openreplay.com/images/creating-a-simple-carousel-with-react-slick/images/hero.png",
//     "https://blog.openreplay.com/images/creating-a-simple-carousel-with-react-slick/images/hero.png",
//   ];

//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <span
//         className="material-symbols-outlined absolute w-8 h-8 flex justify-center items-center top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl
//         rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out
//          z-20 left-2"
//         onClick={onClick}
//       >
//         keyboard_arrow_left
//       </span>
//     );
//   };

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <span
//         className="material-symbols-outlined absolute w-8 h-8 flex justify-center items-center top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl
//          rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out
//          z-20 right-2"
//         onClick={onClick}
//       >
//         keyboard_arrow_right
//       </span>
//     );
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     adaptiveHeight: true,
//     swipeToSlide: true,
//   };

//   return (
//     <div className="bg-black w-full px-40 py-20 flex flex-col items-center justify-center">
//       <div className="w-full py-10 px-12 text-white rounded-2xl shadow-neon neon-border">
//         <div className="flex justify-between items-center mb-10">
//           <p className="font-semibold text-2xl">
//             AI Enhanced Remote ICU Patient Monitoring System
//           </p>
//         </div>
//         <div className="flex space-x-10">
//           {/* Left Side: Image Slider */}
//           <div className="w-1/2">
//             <Slider {...sliderSettings}>
//               {projectImages.map((image, index) => (
//                 <div key={index}>
//                   <img
//                     src={image}
//                     alt={`Project Snapshot ${index + 1}`}
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Right Side: Project Details */}
//           <div className="w-1/2 text-gray-400">
//             <div>
//               <p className="text-xl mb-6">
//                 This project involves the development of a web-based monitoring
//                 system for ICU patients. It features patient registration, vital
//                 signs visualization, and AI-enhanced reporting using the NEWS2
//                 scoring system to assess patient conditions.
//               </p>
//               <div className="mb-4">
//                 <h3 className="text-xl font-semibold mb-2">Key Features</h3>
//                 <ul className="list-disc list-inside space-y-2">
//                   <li>Real-time monitoring of patient vital signs</li>
//                   <li>Role-based views for doctors and nurses</li>
//                   <li>Automated alert generation for abnormal signs</li>
//                   <li>Note-keeping and patient discharge functionalities</li>
//                 </ul>
//               </div>

//               <div className="mb-4">
//                 <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
//                 <p>React, Node.js, MySQL, AWS, Tailwind CSS</p>
//               </div>

//               <div className="flex space-x-12 justify-end mt-16">
//                 <div className="flex justify-between items-center cursor-pointer transition-all neon-hover">
//                   <img
//                     className="material-symbols-outlined rounded-full border border-gray-300 w-10 h-10 flex items-center justify-center"
//                     src={gitHub}
//                   />
//                   <p className="ml-4">Code</p>
//                 </div>
//                 <div className="flex justify-between items-center cursor-pointer transition-all neon-hover">
//                   <span className="material-symbols-outlined text-3xl rounded-full border border-gray-300 w-10 h-10 flex items-center justify-center">
//                     laptop_mac
//                   </span>
//                   <p className="ml-4">Demo</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gitHub from "../assets/images/github.png"; // Adjust path if needed
import projectsData from "../assets/data/projectsData.json"; // Import JSON data

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects data from JSON on component mount
  useEffect(() => {
    setProjects(projectsData);
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
      className="hidden material-symbols-outlined absolutew-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 right-2"
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
        <div
          key={index}
          className="w-full py-10 px-6 md:px-12 text-white rounded-2xl shadow-neon neon-border mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold text-2xl md:text-3xl">
              {project.title}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
            {/* Left Side: Image Slider */}
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

            {/* Right Side: Project Details */}
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
                  {project.techStack.join(", ")}
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
                  <p className="ml-4">Code</p>
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
                  <p className="ml-4">Demo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
