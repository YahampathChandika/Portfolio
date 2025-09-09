import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Frontend Technologies
  {
    name: "React",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vite",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Shadcn UI",
    category: "Frontend",
    image: "https://ui.shadcn.com/favicon.ico",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Redux",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },

  // Backend Technologies
  {
    name: "Node.js",
    category: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    image: "https://img.icons8.com/fluency/96/express-js.png",
  },
  {
    name: "Python",
    category: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    category: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    category: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },

  // Databases
  {
    name: "Supabase",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Sequelize",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  {
    name: "Firebase",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Vercel",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Netlify",
    category: "Cloud & DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },

  // Tools & Methodologies
  {
    name: "Figma",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Jira",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Confluence",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
  },
  {
    name: "Slack",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    name: "Postman",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "Notion",
    category: "Tools",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
  },
];

export default function Skills() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud & DevOps",
    "Tools",
  ];

  const getSkillsByCategory = (category) => {
    return skills.filter((skill) => skill.category === category);
  };

  // More responsive viewport settings for mobile
  const getViewportSettings = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      return { once: true, amount: 0.1 }; // Trigger early on mobile
    }
    return { once: true, amount: 0.2 }; // Standard for desktop
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-40">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col w-full justify-center items-start mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400 md:text-lg mb-1 md:mb-3">My Abilities</p>
          <p className="text-white text-5xl md:text-6xl font-bold">Skills.</p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            return (
              <motion.div
                key={category}
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={getViewportSettings()}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {/* Category Header Animation */}
                <motion.div
                  className="flex items-center gap-4 mb-6 md:mb-8"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {category}
                  </h3>
                  <motion.div
                    className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 0.4,
                          delay: 0.2,
                          ease: "easeOut",
                        },
                      },
                    }}
                    style={{ transformOrigin: "left" }}
                  ></motion.div>
                </motion.div>

                {/* Skills Grid Animation */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      className="group"
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Skill Card Component
function SkillCard({ skill }) {
  return (
    <div className="relative bg-black p-4 md:p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/40 group overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      {/* Neon border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
          <img
            src={skill.image}
            alt={skill.name}
            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback icon */}
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white text-xs md:text-sm font-bold hidden">
            {skill.name.substring(0, 2).toUpperCase()}
          </div>
        </div>

        <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </p>
      </div>
    </div>
  );
}
