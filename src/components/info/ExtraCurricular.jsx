import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "University Swimming Team",
    role: "Team Member",
    organization: "NSBM Green University",
    period: "2021 - 2024",
    description:
      "Represented the university swimming team in inter-university competitions and tournaments. Developed discipline, endurance, and competitive spirit through rigorous training and competitive swimming.",
    category: "Sports",
    achievements: [
      "Participated in inter-university swimming championships",
      "Regular training sessions and fitness maintenance",
      "Team collaboration and sportsmanship development",
    ],
  },
  {
    id: 2,
    title: "School Swimming Team",
    role: "Team Member",
    organization: "Richmond College",
    period: "2011 - 2019",
    description:
      "Active member of the school swimming team, participating in various school-level and inter-school swimming competitions. Built foundational swimming skills and competitive experience.",
    category: "Sports",
    achievements: [
      "Participated in multiple inter-school competitions",
      "Consistent training and performance improvement",
      "School representation in swimming events",
    ],
  },
  {
    id: 3,
    title: "University Association of Engineering",
    role: "Coordinator",
    organization: "NSBM Green University",
    period: "2022 - 2024",
    description:
      "Served as a coordinator for the University Association of Engineering, organizing academic events, workshops, and student activities. Facilitated communication between students and faculty while promoting engineering education.",
    category: "Leadership",
    achievements: [
      "Organized engineering workshops and seminars",
      "Coordinated student activities and events",
      "Facilitated communication between students and faculty",
      "Promoted engineering education and career development",
    ],
  },
  {
    id: 4,
    title: "Circle Wise Secretary",
    role: "Secretary",
    organization: "Richmond College",
    period: "2014 - 2018",
    description:
      "Served as Circle Wise Secretary at school, responsible for administrative duties, event coordination, and student representation. Managed documentation and facilitated communication within the student body.",
    category: "Leadership",
    achievements: [
      "Managed administrative documentation",
      "Coordinated school events and activities",
      "Student representation and communication",
      "Leadership development and responsibility",
    ],
  },
];

const categoryColors = {
  Sports: "from-blue-500 to-cyan-500",
  Leadership: "from-purple-500 to-pink-500",
};

const categoryIcons = {
  Sports: "pool",
  Leadership: "emoji_events",
};

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier
    },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 60,
    x: index % 2 === 0 ? -40 : 40,
    scale: 0.95,
    rotateX: 10,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      mass: 0.8,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const badgeVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
};

const achievementVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ExtraCurricular() {
  return (
    <section className="bg-black text-white md:py-20 px-6 md:px-40 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header with enhanced animation */}
        <motion.div
          className="flex flex-col w-full justify-center items-center md:items-start mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-gray-400 md:text-lg mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Involvement
          </motion.p>
          <motion.p
            className="text-white text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
          >
            Activities.
          </motion.p>
        </motion.div>

        {/* Activities Grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
            margin: "-100px 0px -100px 0px",
          }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="relative p-6 md:p-8 rounded-2xl shadow-neon neon-border bg-white/5 transition-all duration-500 group perspective-1000"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Category Badge with enhanced animation */}
              <motion.div
                className="absolute top-4 right-4"
                variants={badgeVariants}
                whileHover="hover"
              >
                <div
                  className={`bg-gradient-to-r ${
                    categoryColors[activity.category]
                  } p-2 rounded-full h-10 w-10 flex items-center justify-center shadow-lg`}
                >
                  <span className="material-symbols-outlined text-white text-lg">
                    {categoryIcons[activity.category]}
                  </span>
                </div>
              </motion.div>

              {/* Header with staggered text animations */}
              <div className="mb-4">
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white mb-2 pr-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true }}
                >
                  {activity.title}
                </motion.h3>
                <motion.div
                  className="flex flex-col md:flex-row md:items-center md:gap-2 text-sm md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-blue-300 font-semibold">{activity.role}</p>
                  <span className="hidden md:inline text-gray-500">•</span>
                  <p className="text-gray-400">{activity.organization}</p>
                </motion.div>
                <motion.p
                  className="text-gray-500 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {activity.period}
                </motion.p>
              </div>

              {/* Description with smooth fade-in */}
              <motion.p
                className="text-gray-300 text-sm md:text-base leading-relaxed mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                {activity.description}
              </motion.p>

              {/* Achievements with staggered animations */}
              <div className="mb-4">
                <motion.h4
                  className="text-white font-semibold mb-3 flex items-center gap-2"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="material-symbols-outlined text-yellow-400 text-lg"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      delay: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    star
                  </motion.span>
                  Key Achievements
                </motion.h4>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                      variants={achievementVariants}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="material-symbols-outlined text-green-400 text-xs mt-0.5"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          damping: 15,
                          stiffness: 300,
                          delay: 0.1 * idx + 0.6,
                        }}
                        viewport={{ once: true }}
                      >
                        check_circle
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1 * idx + 0.7,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Category Label with slide-up animation */}
              <motion.div
                className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                <motion.span
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                    categoryColors[activity.category]
                  } text-white shadow-lg`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 300,
                  }}
                >
                  {activity.category}
                </motion.span>
              </motion.div>

              {/* Enhanced hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              {/* Subtle border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
