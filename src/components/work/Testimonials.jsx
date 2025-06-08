import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Mr. R. A. Prabhath Buddhika",
    position:
      "Senior Lecturer / HoD \nDepartment of Electrical, Electronic and Systems Engineering, \nFaculty of Engineering,\nNSBM Green University,\nHomagama,\nSri Lanka.",
    image:
      "https://i1.rgstatic.net/ii/profile.image/11431281209793948-1701837952770_Q512/Prabhath-Buddhika-2.jpg",
    contact: "+94 71 603 7498",
    email: "prabhath.b@nsbm.ac.lk",
  },
  {
    name: "Mr. Sahan Hettige",
    position: "ICT Project Manager,\nAmerck Inc.\nStratfordAve,\nColombo.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQG5RyIleqwxbw/profile-displayphoto-shrink_200_200/B56ZW0ugmkGoAc-/0/1742493848558?e=2147483647&v=beta&t=YROqKSzy6JER9rbb4QuG3W70uvVsaFr7TWyvnySV4ek",
    contact: "+94 71 258 5352",
    email: "sahanhettige18@gmail.com",
  },
];

const PrevArrow = ({ onClick }) => (
  <span
    className="hidden material-symbols-outlined absolute md:flex justify-center items-center top-1/2 -translate-y-1/2 text-slate-500 text-3xl md:text-5xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 md:-left-9"
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
    className="hidden material-symbols-outlined absolute w-8 h-8 md:flex justify-center items-center top-1/2 -translate-y-1/2 text-slate-500 text-3xl md:text-5xl rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out z-20 md:-right-5"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    keyboard_arrow_right
  </span>
);

export default function Testimonials() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="bg-black text-white py-20 px-8 md:px-40">
      <motion.div
        className="flex flex-col w-full justify-center items-center mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="text-gray-400 md:text-lg mb-1 md:mb-3">References</p>
        <p className="text-white text-4xl md:text-5xl font-bold">Referees.</p>
      </motion.div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Slider {...sliderSettings} className="flex items-center text-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 md:p-8 !w-11/12 min-h-60 flex flex-col items-center justify-center text-center rounded-lg shadow-neon neon-border transition-all duration-300 border border-gray-500"
              >
                <div className="flex justify-between">
                  <div className="text-left">
                    <p className="text-lg md:text-3xl font-semibold text-white mb-5">
                      {testimonial.name}
                    </p>
                    <p
                      style={{ whiteSpace: "pre-line" }}
                      className="text-sm md:text-lg text-gray-400"
                    >
                      {testimonial.position}
                    </p>
                  </div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 md:w-20 h-10 md:h-20 rounded-full object-cover ml-2"
                  />
                </div>
                <div className="flex flex-col md:items-end mt-5">
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm md:text-base text-gray-300">{testimonial.contact}</p>
                    <span class="material-symbols-outlined text-sm md:text-lg ml-3 text-gray-300">
                      call
                    </span>
                  </div>
                  <div className="flex items-start justify-between mt-1 cursor-pointer">
                    <p className="text-sm md:text-base text-gray-300 break-all text-left">
                      <a
                        href={`mailto:${testimonial.email}`}
                        className="hover:text-gray-100"
                      >
                        {testimonial.email}
                      </a>
                    </p>
                    <i className="far fa-envelope text-sm md:text-lg ml-3 text-gray-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
