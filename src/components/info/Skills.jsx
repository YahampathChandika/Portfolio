import React from "react";
import Marquee from "react-fast-marquee";

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
  { name: "REST", icon: "fas fa-link" },
];

export default function Skills() {
  // Split the skills list into two halves for the two rows
  const halfIndex = Math.ceil(skills.length / 2);
  const rowOneSkills = skills.slice(0, halfIndex);
  const rowTwoSkills = skills.slice(halfIndex);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col w-full justify-center items-start mb-10">
          <p className="text-gray-400 md:text-lg mb-1">My Abilities</p>
          <p className="text-white text-4xl md:text-5xl font-bold">Skills.</p>
        </div>

        {/* Row One */}
        <Marquee gradient={false} speed={50} className="mb-8">
          {rowOneSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>

        {/* Row Two */}
        <Marquee
          gradient={false}
          speed={50}
          direction="right"
          // pauseOnHover={true}
        >
          {rowTwoSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

// Skill Card Component
function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center p-5 rounded-lg w-20 md:w-48 neon-border transition duration-300 ease-in-out shadow-lg neon-hover mx-4">
      <i className={`${skill.icon} text-3xl md:text-5xl text-white mb-4`}></i>
      <p className="md:text-lg font-semibold">{skill.name}</p>
    </div>
  );
}
