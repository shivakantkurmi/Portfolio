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
import vit from "../assets/VIT.jpeg";
import school from "../assets/School.png";

const experiences = [
  {
    title: "AI Intern",
    company_name: "Microsoft Initiative with Edunet Foundation & AICTE",
    icon: internship,
    iconBg: "#383E56",
    date: "April 2025 - May 2025",
    points: [
      "Selected for a national 4-week internship as part of a Microsoft & AICTE initiative in collaboration with Edunet Foundation.",
      "Engineered and deployed machine learning models to solve real-world problems, applying advanced AI technologies.",
      "Developed EduMentor AI, a RAG-based learning platform using the Gemini API, FAISS vector search, and embedding-based context retrieval to generate personalized study plans and quizzes.",
    ],
  },
  {
    title: "B.Tech, Computer Science & Engineering (Gaming Technology)",
    company_name: "Vellore Institute of Technology (VIT Bhopal), MP",
    icon: vit,
    iconBg: "#E6DEDD",
    date: "2023 - 2027",
    points: [
      "Maintaining a high CGPA of 9.83/10.0 through dedicated study and academic rigor.",
      "Selected for the prestigious STARS Scheme, recognizing academic excellence.",
      "Building a strong foundation in Data Structures, Algorithms, MERN Stack, AWS Cloud, and Unity Game Development.",
    ],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    company_name: "Amazon Web Services (AWS)",
    icon: internship,
    iconBg: "#232F3E",
    date: "2025",
    points: [
      "Earned the AWS Certified Cloud Practitioner certification, demonstrating foundational cloud knowledge and expertise.",
      "Gained hands-on experience with core AWS services including EC2, RDS, S3, CloudFront, and Load Balancer.",
      "Applied AWS knowledge to design scalable, cloud-ready deployment architecture for production projects.",
    ],
  },
  {
    title: "Class XII (Senior Secondary)",
    company_name: "Govt. HSS Hinota Kalan Hatta, Damoh, MP",
    icon: school,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Achieved an outstanding score of 95% in the Madhya Pradesh Board examinations.",
      "Honored as the District Topper for securing the highest marks in the region.",
    ],
  },
  {
    title: "Class X (High School)",
    company_name: "Govt. High School Bhainsa Hatta, Damoh, MP",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Secured an excellent score of 95% in the board examinations.",
    ],
  },
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
