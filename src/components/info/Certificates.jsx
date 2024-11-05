import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Modal, Fade, Backdrop } from "@mui/material";
import aws from "../../assets/images/aws.png";
import ml from "../../assets/images/ml.png";
import dl from "../../assets/images/dl.png";

const certificates = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy Graduate",
    year: "2024",
    image: aws,
    link: "https://www.credly.com/badges/eef34be6-b727-4aab-a8b7-4c62d70dbbdc/public_url",
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MatLab Academy",
    year: "2024",
    image: ml,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=bf440033-1b89-49d9-9fcf-a7ce2c3447f1&",
  },
  {
    title: "Deep Learning Onramp",
    issuer: "MatLab Academy",
    year: "2024",
    image: dl,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=261e4bb5-bca0-4c2d-90b1-e52e9da0d351&",
  },
  // Add more certificates as needed
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxHeight: "95vh", // Prevent overflow on small screens
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
    <section className="bg-black text-white py-20 px-6 md:px-40">
      <div className="container mx-auto flex flex-col items-start mb-12">
        <p className="text-gray-400 md:text-lg mb-1">My Achievements</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold">Certificates.</h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-lg bg-white/10 hover:shadow-neon hover:scale-105 transition-all duration-300 border border-gray-500 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 md:h-60 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col items-start text-left">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mt-1">{cert.year}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-8 h-8 text-white bg-black rounded-full shadow-neon p-1 hover:text-gray-300 flex justify-center items-center"
              >
                <i className="fas fa-link text-sm"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
            {selectedCert && (
              <>
                <div className="flex justify-between">
                  <p className="text-black text-sm font-medium md:font-semibold md:text-3xl mb-2">
                    {selectedCert.title}
                  </p>
                  <p className="text-black text-sm font-medium md:font-medium md:text-2xl">
                    {selectedCert.issuer} | {selectedCert.year}
                  </p>
                </div>

                <hr className="border border-1 border-black/60 mb-6 md:mb-10" />
                <img
                  src={selectedCert.image}
                  alt={"Click Link"}
                  className="rounded-lg w-full"
                />
                <a
                  href={selectedCert?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-gray-800 hover:text-black flex items-center mt-2 justify-end"
                >
                  View Certificate
                  <span class="material-symbols-outlined text-sm md:text-lg ml-1 md:ml-2">
                    open_in_new
                  </span>
                </a>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </section>
  );
}
