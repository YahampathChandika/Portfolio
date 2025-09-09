import React from "react";
import Marquee from "react-fast-marquee";

const skills = [
  // Frontend Technologies
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Shadcn UI",
    image: "https://ui.shadcn.com/favicon.ico",
  },
  {
    name: "Bootstrap",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Redux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

  // Backend Technologies
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    image: "https://img.icons8.com/fluency/96/express-js.png",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },

  // Databases
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Supabase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Sequelize",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  // Tools & Methodologies
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Jira",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Confluence",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
  },
  {
    name: "Slack",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    name: "REST API",
    image: "https://img.icons8.com/color/96/api-settings.png",
  },
  {
    name: "OOP",
    image: "https://img.icons8.com/color/96/module.png",
  },
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
        <Marquee gradient={false} speed={150} className="mb-8">
          {rowOneSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>

        {/* Row Two */}
        <Marquee
          gradient={false}
          speed={150}
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
    <div className="flex bg-white/5 flex-col items-center p-5 rounded-lg w-20 md:w-48 neon-border transition duration-300 ease-in-out shadow-lg neon-hover mx-4">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-8 h-8 md:w-12 md:h-12 mb-4 object-contain"
        onError={(e) => {
          // Fallback to a default icon if image fails to load
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "block";
        }}
      />
      {/* Fallback icon (hidden by default) */}
      <div
        className="w-8 h-8 md:w-12 md:h-12 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs md:text-sm font-bold"
        style={{ display: "none" }}
      >
        {skill.name.substring(0, 2).toUpperCase()}
      </div>
      <p className="text-sm md:text-lg font-semibold text-center">
        {skill.name}
      </p>
    </div>
  );
}
