import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import internship from "../assets/Internship.png";
import vit from "../assets/VIT.jpeg"; // Placeholder for VIT University icon
import school from "../assets/school.png"; 

const experiences = [
  {
    title: "AI Intern",
    company_name: "Microsoft Initiative with Edunet Foundation & AICTE",
    icon: internship, // Using the imported icon
    iconBg: "#383E56",
    date: "April 2025 - May 2025",
    points: [
      "Engineered and deployed machine learning models to solve real-world problems, applying advanced AI technologies.",
      "Collaborated in an agile team to design, develop, and optimize AI-driven solutions for enhanced project outcomes.",
      "Developed EduMentor AI, a personalized study tool using the Gemini 1.5 Flash API to generate custom study plans and quizzes.",
    ],
  },
  {
    title: "B.Tech, Computer Science & Engineering",
    company_name: "VIT Bhopal University, MP",
    icon: vit, // Using the placeholder icon
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Maintaining a high CGPA of 9.82/10.0 through dedicated study and academic rigor.",
      "Selected for the prestigious STARS Scheme, recognizing academic excellence.",
      "Building a strong foundation in Data Structures, Algorithms, MERN Stack, and Unity Game Development.",
    ],
  },
  // {
  //   title: "Class XII (Senior Secondary)",
  //   company_name: "Govt. HSS Hinota Kalan Hatta, Damoh, MP",
  //   icon: school, // Using the placeholder icon
  //   iconBg: "#383E56",
  //   date: "2023",
  //   points: [
  //     "Achieved an outstanding score of 95% in the Madhya Pradesh Board Result.",
  //     "Honored as the District Topper for securing the highest score in the region.",
  //   ],
  // },
  // {
  //   title: "Class X (High School)",
  //   company_name: "Govt. High School Bhainsa Hatta, Damoh, MP",
  //   icon: school, // Using the placeholder icon
  //   iconBg: "#E6DEDD",
  //   date: "2021",
  //   points: [
  //     "Secured an excellent score of 95% in the board examinations.",
  //   ],
  // },
];


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
