import React from "react";
import { useSpring, animated as a } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import cert1Img from "../../assets/images/hero.jpg"; 
import cert2Img from "../../assets/images/hero.jpg";
import cert3Img from "../../assets/images/hero.jpg";

const certificates = [
  { title: "React Developer", institution: "Coursera", image: cert1Img },
  { title: "Full Stack Web Development", institution: "edX", image: cert2Img },
  { title: "AWS Certified Solutions Architect", institution: "Amazon", image: cert3Img },
  { title: "React Developer", institution: "Coursera", image: cert1Img },
  { title: "Full Stack Web Development", institution: "edX", image: cert2Img },
  { title: "AWS Certified Solutions Architect", institution: "Amazon", image: cert3Img },
  { title: "React Developer", institution: "Coursera", image: cert1Img },
  { title: "Full Stack Web Development", institution: "edX", image: cert2Img },
  { title: "AWS Certified Solutions Architect", institution: "Amazon", image: cert3Img },
];

export default function Certificates() {
  const [index, setIndex] = React.useState(0);

  const bind = useDrag(({ movement: [mx], direction: [xDir], distance, cancel }) => {
    if (distance > 100) {
      cancel();
      setIndex((prev) => (xDir > 0 ? (prev + 1) % certificates.length : (prev - 1 + certificates.length) % certificates.length));
    }
  });

  const { x } = useSpring({
    x: index * -100,
    config: { tension: 300, friction: 30 },
  });

  return (
    <section className="bg-red-500 text-white py-20">
      <div className="container mx-auto px-6 text-center mb-10">
        <p className="text-gray-400 text-lg">Achievements</p>
        <p className="text-white text-5xl font-bold">Certificates</p>
      </div>

      <div className="relative h-80 sm:h-96 overflow-hidden">
        <a.div
          {...bind()}
          style={{ x }}
          className="flex space-x-8 sm:space-x-12 justify-center items-center"
        >
          {certificates.map((cert, i) => (
            <a.div
              key={i}
              className={`w-60 sm:w-80 h-72 sm:h-80 shadow-lg rounded-lg flex-none transform transition duration-500`}
              style={{
                backgroundImage: `url(${cert.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white rounded-b-lg">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm">{cert.institution}</p>
                </div>
            </a.div>
          ))}
        </a.div>
      </div>

      <div className="mt-6 text-center text-gray-400">
        Drag left or right to view more
      </div>
    </section>
  );
}
