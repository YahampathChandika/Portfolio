// import React from "react";

// export default function Skills() {
//   const skills = [
//     { name: "React", icon: "fab fa-react" },
//     { name: "Node.js", icon: "fab fa-node-js" },
//     { name: "MySQL", icon: "fas fa-database" },
//     { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
//     { name: "Java", icon: "fab fa-java" },
//     { name: "JavaScript", icon: "fab fa-js" },
//     { name: "C", icon: "fas fa-code" },
//     { name: "Python", icon: "fab fa-python" },
//     { name: "MongoDB", icon: "fas fa-leaf" },
//     { name: "Express.js", icon: "fas fa-server" },
//     { name: "Docker", icon: "fab fa-docker" },
//     { name: "Kubernetes", icon: "fas fa-cubes" },
//     { name: "GraphQL", icon: "fas fa-project-diagram" },
//     { name: "PostgreSQL", icon: "fas fa-database" },
//     { name: "AWS", icon: "fab fa-aws" },
//     { name: "Git", icon: "fab fa-git-alt" },
//     { name: "TypeScript", icon: "fab fa-js-square" },
//     { name: "Redux", icon: "fas fa-sync" },
//     { name: "Angular", icon: "fab fa-angular" },
//     { name: "Sass", icon: "fab fa-sass" },
//     { name: "Next.js", icon: "fas fa-layer-group" },
//     { name: "Firebase", icon: "fas fa-fire" },
//     { name: "PHP", icon: "fab fa-php" },
//     { name: "REST API", icon: "fas fa-link" },
//   ];

//   return (
//     <section className="bg-black text-white py-20">
//       <div className="container mx-auto px-6 ">
//         <div className="flex flex-col w-full justify-center items-start mb-20">
//           <p className="text-gray-400 md:text-lg mb-1 md:mb-3">My Work</p>
//           <p className="text-white text-5xl md:text-6xl font-bold">Skills.</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg neon-border shadow-neon"
//             >
//               <i className={`${skill.icon} text-5xl text-blue-400 mb-4`}></i>
//               <p className="text-lg font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const skills = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Tailwind", icon: "fab fa-css3-alt" },
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "C", icon: "fas fa-code" },
    { name: "Python", icon: "fab fa-python" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-cubes" },
    { name: "GraphQL", icon: "fas fa-project-diagram" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "TypeScript", icon: "fab fa-js-square" },
    { name: "Redux", icon: "fas fa-sync" },
    { name: "Angular", icon: "fab fa-angular" },
    { name: "Sass", icon: "fab fa-sass" },
    { name: "Next.js", icon: "fas fa-layer-group" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "REST API", icon: "fas fa-link" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col w-full justify-center items-start mb-10">
          <p className="text-gray-400 md:text-lg mb-1">My Work</p>
          <p className="text-white text-5xl md:text-6xl font-bold">Skills.</p>
        </div>

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-5">
              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg neon-border shadow-neon">
                <i className={`${skill.icon} text-5xl text-blue-400 mb-4`}></i>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
