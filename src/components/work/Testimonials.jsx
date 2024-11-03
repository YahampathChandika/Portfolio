import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO at XYZ Corp",
    image:
      "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
    quote:
      "A very talented developer with a strong sense of design and quality.",
    contact: "123-456-7890",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    position: "Product Manager at ABC Inc.",
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
    quote: "Their work exceeded expectations and was delivered on time.",
    contact: "987-654-3210",
    email: "jane.smith@example.com",
  },
  // Add more testimonials as needed
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
        <p className="text-gray-400 md:text-lg mb-1 md:mb-3">What People Say</p>
        <p className="text-white text-4xl md:text-5xl font-bold">
          Testimonials
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Slider {...sliderSettings} className="flex items-center text-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 md:p-8 !w-11/12 min-h-60 flex flex-col items-center justify-center text-center rounded-lg shadow-neon neon-border transition-all duration-300 border border-gray-500"
              >
                <p className="text-lg md:text-xl italic mb-6 text-gray-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 md:w-20 h-10 md:h-20 rounded-full object-cover mr-4 md:mr-8"
                  />
                  <div className="text-left">
                    <p className="md:text-xl font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm md:text-lg text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-center justify-center mt-5">
                  <div className="flex items-center mt-2 flex-nowrap">
                    <span class="material-symbols-outlined text-sm md:text-lg mr-2 text-gray-400">
                      call
                    </span>
                    <p className="text-sm text-gray-400 items-">
                      {testimonial.contact}
                    </p>
                  </div>
                  <div className="flex items-center flex-nowrap">
                    <p className="text-sm text-gray-400">
                      <i className="far fa-envelope text-sm md:text-lg mr-2"></i>
                      <a
                        href={`mailto:${testimonial.email}`}
                        className="hover:text-gray-300"
                      >
                        {testimonial.email}
                      </a>
                    </p>
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
