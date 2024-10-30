import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experienceData from "../assets/data/experience.json";

const Experience = () => {
  return (
    <div className="bg-black text-white py-12 px-8 md:px-40">
      <div className="flex flex-col w-full justify-center items-center mb-20 text-center">
        <p className="text-gray-400 text-lg mb-1 md:mb-3">
          What I have done so far
        </p>
        <p className="text-white text-6xl font-bold">Work Experience.</p>
      </div>
      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--${experience.type}`}
            contentStyle={{
              background: "#000",
              color: "#fff",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "10px"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={experience.period}
            dateClassName="text-white"
            iconStyle={{
              background: index % 2 === 0 ? "#38b2ac" : "#ed64a6",
              color: "#fff",
            }}
            icon={
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
                style={{ borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg text-gray-400">
              {experience.company}
            </h4>
            <ul className="mt-3 list-disc list-inside">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="text-gray-300 text-lg mb-3">
                  {desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
