// import React from "react";
// import aboutImg from "../../assets/images/about.jpg";

// export default function AboutMe() {
//   return (
//     <section
//       className="relative flex items-center justify-end min-h-screen bg-fixed bg-cover bg-center -mt-32 p-10"
//       style={{
//         backgroundImage: `url(${aboutImg})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-70"></div>

//       <div className="relative z-10 w-full max-w-lg text-right pr-6 md:pr-16">
//         <div className="flex items-center justify-end gap-2 mb-6">
//           <span class="relative flex h-3 w-3">
//             <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//             <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
//             About Me
//           </h2>
//         </div>

//         <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//           Hi, I’m Yahampath, a Full-Stack Developer with a passion for crafting
//           seamless digital solutions that blend functionality with aesthetic
//           appeal. With hands-on experience across both front-end and back-end
//           development, I’m dedicated to turning complex ideas into simple,
//           impactful digital experiences.
//         </p>
//       </div>
//     </section>
//   );
// }

import React from "react";
import aboutImg from "../../assets/images/me3.jpg";

export default function AboutMe() {
  return (
    <section
      className="relative flex items-center justify-center md:justify-end min-h-screen bg-fixed bg-cover bg-center -mt-32 p-6 md:p-10"
      style={{
        backgroundImage: `url(${aboutImg})`,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "50% 10%",        
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>

      <div className="relative z-10 w-full max-w-lg text-center md:text-right px-4 md:px-6 lg:pr-16">
        <div className="flex items-center justify-center md:justify-end gap-2 mb-4 md:mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            About Me
          </h2>
        </div>

        <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed">
          Hi, I’m Yahampath, a Full-Stack Developer with a passion for crafting
          seamless digital solutions that blend functionality with aesthetic
          appeal. With hands-on experience across both front-end and back-end
          development, I’m dedicated to turning complex ideas into simple,
          impactful digital experiences.
        </p>
      </div>
    </section>
  );
}
