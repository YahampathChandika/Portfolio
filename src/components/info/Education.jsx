import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FaUniversity } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      institution: "NSBM Green University Town",
      degree: "B.Sc. Engineering Honours in Computer System Engineering",
      year: "2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMusNEftMbTRViAvsf9E2hevtoFoTcYmxHA&s",
      grade: "GPA: 2.0",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Advanced Level - Physical Science",
      year: "2019",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
      grade: "Combined Mathematics - A | Chemistry - B | Physics - C",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Ordinary Level",
      year: "2016",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
      grade: "A - 8 | B -1",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col w-full justify-center items-center mb-20">
          <p className="text-gray-400 text-lg mb-3">My Journey</p>
          <p className="text-white text-5xl font-bold">Education.</p>
        </div>

        <VerticalTimeline>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "10px",
                padding: "40px 0 40px 30px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date={edu.year}
              iconStyle={{ background: "#333", color: "#000" }}
              icon={
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain"
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
              <h4 className="text-gray-200 text-lg mb-1">{edu.degree}</h4>
              <p className="text-gray-400 text-sm font-light">{edu.grade}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
