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

export default function ExtraCurricular() {
  return (
    <section className="bg-black text-white md:py-20 px-6 md:px-40">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col w-full justify-center items-center md:items-start mb-16">
          <p className="text-gray-400 md:text-lg mb-1">My Involvement</p>
          <p className="text-white text-4xl md:text-5xl font-bold">
            Activities.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="relative p-6 md:p-8 rounded-2xl shadow-neon neon-border bg-white/5 transition-all duration-300 group"
              initial={{
                y: 50,
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <div
                  className={`bg-gradient-to-r ${
                    categoryColors[activity.category]
                  } p-2 rounded-full h-10 w-10 flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-white text-lg">
                    {categoryIcons[activity.category]}
                  </span>
                </div>
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 pr-12">
                  {activity.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-sm md:text-base">
                  <p className="text-blue-300 font-semibold">{activity.role}</p>
                  <span className="hidden md:inline text-gray-500">•</span>
                  <p className="text-gray-400">{activity.organization}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1">{activity.period}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {activity.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400 text-lg">
                    star
                  </span>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="material-symbols-outlined text-green-400 text-xs mt-0.5">
                        check_circle
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Label */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                    categoryColors[activity.category]
                  } text-white`}
                >
                  {activity.category}
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
