import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide border-b-4 border-white inline-block pb-2">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 mt-4">
          I’m Yahampath, a passionate Full-Stack Developer dedicated to creating
          seamless and impactful digital experiences. With expertise across front-end
          and back-end development, I enjoy transforming complex challenges into functional, aesthetic solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-400 leading-relaxed">
              Over 2 years of hands-on experience in software development, working on projects from concept to deployment. Skilled in React, Node.js, and cloud solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Interests</h3>
            <p className="text-gray-400 leading-relaxed">
              Aside from coding, I’m interested in AI advancements, UI/UX design, and enjoy exploring new tech trends that enhance user experiences.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="w-16 h-16 rounded-full bg-white animate-ping inline-flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-3xl">
              person
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
