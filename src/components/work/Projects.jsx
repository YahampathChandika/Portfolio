import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from "../../assets/data/projectsData.json";
import { Box, Modal, Fade, Backdrop, Typography, Button } from "@mui/material";
import admitted from "../../assets/images/admitted.png";
import chartview from "../../assets/images/chartview.png";
import overview from "../../assets/images/overview.png";
import patients from "../../assets/images/patients.png";
import reg1 from "../../assets/images/reg1.png";
import reg2 from "../../assets/images/reg2.png";
import tableview from "../../assets/images/tableview.png";
import userReg from "../../assets/images/userReg.png";
import users from "../../assets/images/users.png";
import medi1 from "../../assets/images/medi1.png";
import medi2 from "../../assets/images/medi2.png";
import medi3 from "../../assets/images/medi3.png";
import medi4 from "../../assets/images/medi4.png";
import medi5 from "../../assets/images/medi5.png";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false); // Modal state
  const [selectedProject, setSelectedProject] = useState(null); // Selected project

  const imageMap = {
    admitted,
    chartview,
    overview,
    patients,
    reg1,
    reg2,
    tableview,
    userReg,
    users,
    medi1,
    medi2,
    medi3,
    medi4,
    medi5,
  };

  useEffect(() => {
    setProjects(projectsData);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const PrevArrow = ({ onClick }) => (
    <span
      className="hidden material-symbols-outlined absolute w-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 text-slate-500 text-5xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 left-2"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      keyboard_arrow_left
    </span>
  );

  const NextArrow = ({ onClick }) => (
    <span
      className="hidden material-symbols-outlined absolute w-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 text-slate-500 text-5xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 right-2"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      keyboard_arrow_right
    </span>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    // adaptiveHeight: false,
    swipeToSlide: true,
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    maxHeight: "90vh", // Prevent overflow on small screens
    overflowY: "auto", // Enable scrolling if content overflows
    bgcolor: "background.paper",
    boxShadow: "shadow-neon",
    border: "neon-border",
    borderRadius: "10px",
    p: 4,
    outline: "none",

    // Responsive styles
    "@media (max-width: 768px)": {
      width: "90%", // Make it wider for smaller screens
      p: 2, // Reduce padding
    },
    "@media (max-width: 480px)": {
      width: "95%", // Even more compact on very small screens
      p: 1,
    },
  };

  return (
    <div className="bg-black w-full py-20 px-8 md:px-40 flex flex-col items-center justify-center">
      <div className="flex flex-col w-full justify-center items-start mb-20">
        <p className="text-gray-400 md:text-lg mb-1 md:mb-3">My Work</p>
        <p className="text-white text-5xl md:text-6xl font-bold">Projects.</p>
      </div>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="w-full py-10 px-6 md:px-12 text-white rounded-2xl shadow-neon neon-border mb-12"
          initial={
            isMobile
              ? { y: 50, opacity: 0 } // Same animation for mobile
              : { x: index % 2 === 0 ? -200 : 200, opacity: 0 } // Alternate for desktop
          }
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: isMobile ? 0.2 : 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold text-2xl md:text-3xl">
              {project.title}
            </p>
          </div>

          <div
            onClick={() => handleOpen(project)}
            className={`flex cursor-pointer ${
              isMobile
                ? "flex-col space-y-6"
                : index % 2 === 0
                ? "md:flex-row md:space-x-10"
                : "md:flex-row-reverse md:space-x-reverse md:space-x-10"
            } md:space-y-0`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Slider {...sliderSettings}>
                {project.images.map((imageKey, idx) => (
                  <div key={idx}>
                    <img
                      src={imageMap[imageKey]}
                      alt={`Project Snapshot ${idx + 1}`}
                      className="rounded-lg w-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Description Section */}
            <div className="w-full md:w-1/2 text-gray-400">
              <p className="text-base md:text-xl mb-8">{project.description}</p>

              <div className="mb-8">
                <h3 className="text-base md:text-xl font-semibold mb-2 text-white">
                  Key Features
                </h3>
                <ul className="text-sm md:text-lg list-disc list-inside space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-base md:text-xl font-semibold mb-2 text-white">
                  Tech Stack
                </h3>
                <p className="text-sm md:text-lg">
                  {project.techStack.join(" | ")}
                </p>
              </div>

              <div
                className={`flex space-x-6 md:space-x-12 justify-between ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } mt-8`}
              >
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center cursor-pointer transition-all neon-hover"
                >
                  <i className="fab fa-github text-xl md:text-3xl rounded-full border border-gray-300 w-6 md:w-10 h-6 md:h-10 flex items-center justify-center"></i>
                  <p className="ml-2 md:ml-4">Code</p>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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

      {/* MUI Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            {selectedProject && (
              <>
                <p className="text-black text-sm font-medium md:font-semibold md:text-3xl mb-2">
                  {selectedProject.title}
                </p>
                <hr className="border border-1 border-black/60 mb-6 md:mb-10" />
                <Slider {...sliderSettings}>
                  {selectedProject.images.map((imageKey, idx) => (
                    <div key={idx}>
                      <img
                        src={imageMap[imageKey]}
                        alt={`Project Snapshot ${idx + 1}`}
                        className="rounded-lg w-full"
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}