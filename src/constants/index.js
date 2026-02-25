// General Icons
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import github from "../assets/github.png";

// Tech Icons from assets/tech
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png"; // Using git from tech/ as a fallback
import html from "../assets/tech/html.png"; // Assuming html is in tech/ based on context
import javascript from "../assets/tech/javascript.png"; // Assuming javascript is in tech/
import mongodb from "../assets/tech/mongodb.png"; // Assuming mongodb is in tech/
import nodejs from "../assets/tech/nodejs.png"; // Assuming nodejs is in tech/
import reactjs from "../assets/tech/reactjs.png"; // Assuming reactjs is in tech/
import tailwind from "../assets/tech/tailwind.png"; // Assuming tailwind is in tech/
import cpp from "../assets/tech/cpp.png";
import canva from "../assets/tech/canva.png";
import express from "../assets/tech/express.png";

// Project Images from assets
import survivalArena from "../assets/survivalArena.jpg";
import expenseTracker from "../assets/expenseTracker.png";
import attendanceSystem from "../assets/attendanceSystem.png";
import solarisNight from "../assets/arSolarSystem.png";
import eduMentor from "../assets/eduMentor.jpeg";
import arAnatomy from "../assets/arAnatomy.png";
import arSolarSystem from "../assets/arSolarSystem.png";
import pewPewWaves from "../assets/pewPewWaves.png";
import speedwaySaga from "../assets/speedwaySaga.png";
import mycampus from "../assets/My-Campus.png";
import fixitnow from "../assets/fixitnow.png";
import questforge from "../assets/questforge.png";

// Experience Icons from assets
import codSoft from "../assets/company/codSoft.png"; // Using as a placeholder for microsoft
import unity from "../assets/company/unity.png"; // Using as a placeholder for vit
import book from "../assets/company/book.png"; // Using as a placeholder for school

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Unity Game Developer",
    icon: mobile,
  },
  {
    title: "AI & ML Engineer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express JS",
    icon: express,
  },
];

const experiences = [
  {

    title: "AI Intern",
    company_name: "Microsoft Initiative with Edunet Foundation & AICTE",
    icon: codSoft, // Placeholder for microsoft
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
    icon: unity, // Placeholder for vit
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Maintaining a high CGPA of 9.82/10.0.",
      "Selected for the prestigious STARS Scheme for academic excellence.",
      "Strengthening skills in Data Structures, Algorithms, MERN Stack, and Unity Game Development.",
    ],
  }
];

// Testimonials can be added here once available.
const testimonials = [];

const projects = [
  {
    name: "Fix-It-Now",
    description:
      "A full-stack civic issue reporting platform that enables citizens to report local infrastructure problems and allows administrators to manage, track, and resolve them in real time with some extra functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: fixitnow, // TODO: replace with actual project image
    source_code_link: "https://github.com/shivakantkurmi/Fix-It-Now",
    live_link: "https://fix-it-now-six.vercel.app/",
  },
  {
    name: "My-Campus",
    description:
      "A full-stack campus-life management platform built for VIT Bhopal students and faculty. It replaces scattered, manual workflows — attendance sheets, hunting for professors, keeping track of grades, and finding study material — with a single, fast, role-aware web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mycampus, // TODO: replace with actual project image
    source_code_link: "https://github.com/shivakantkurmi/My-Campus",
    live_link: "https://my-campus-frontend.vercel.app",
  },
  {
    name: "Quest-Forge",
    description:
      "A gamified full-stack learning platform where developers level up by solving coding challenges, completing interactive learning modules, and practising AI-powered mock interviews — all wrapped in a dark-fantasy RPG aesthetic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: questforge, // TODO: replace with actual project image
    source_code_link: "https://github.com/shivakantkurmi/QuestForge",
    live_link: "",
  },



  {
    name: "EduMentor AI",
    description:
      "A personalized AI study tool that leverages the Gemini 1.5 Flash API to generate custom study plans, quizzes, and learning materials. It helps users overcome difficulties and understand core concepts in various problem-solving domains.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eduMentor,
    source_code_link: "https://github.com/shivakantkurmi/Edumentor-AI",
    live_link: "",
  },
  {
    name: "AI Expense Tracker",
    description:
      "A full-stack MERN application for personal finance management with AI-powered insights, implementing secure user authentication and visualizing data with Chart.js to provide actionable recommendations on spending habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "chartjs",
        color: "orange-text-gradient",
      },
    ],
    image: expenseTracker,
    source_code_link: "https://github.com/shivakantkurmi/AI-Expense-Tracker",
    live_link: "https://ai-expense-tracker-frontend.vercel.app/",
  },
  {
    name: "Survival Arena: Cyborg Showdown",
    description:
      "A first-person shooter developed in Unity, featuring dynamic enemy AI, a comprehensive health and weapon system, and NavMesh-based pathfinding to create an engaging survival experience.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "gamedev",
        color: "pink-text-gradient",
      },
    ],
    image: survivalArena,
    source_code_link: "https://github.com/shivakantkurmi/Survival-Arena---Cyborg-Showdown.git",
    live_link: "",
  },
  {
    name: "Pew Pew Waves",
    description:
      "A low-poly first-person shooting game featuring four distinct maps: Adventure, City, Practice Area, and Warland, offering diverse combat scenarios.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "gamedev",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: pewPewWaves,
    source_code_link: "https://github.com/shivakantkurmi/Pew-Pew-Waves",
    live_link: "",
  },
  {
    name: "Speedway Saga",
    description:
      "A fast-paced and simple Android game where you dodge traffic and obstacles while collecting diamonds on a never-ending highway. Your goal is simple: stay alive for as long as possible!",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "gamedev",
        color: "pink-text-gradient",
      },
    ],
    image: speedwaySaga,
    source_code_link: "https://github.com/shivakantkurmi/Speedway-Saga",
    live_link: "",
  },
  {
    name: "AR Anatomy",
    description:
      "An educational Augmented Reality (AR) application that utilizes Vuforia Engine and Unity to track a marker and project anatomical structures in 3D. This interactive experience enhances learning by allowing users to explore human anatomy in real-time.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "ar",
        color: "green-text-gradient",
      },
      {
        name: "vuforia",
        color: "pink-text-gradient",
      },
    ],
    image: arAnatomy,
    source_code_link: "https://github.com/shivakantkurmi/AR-Anatomy",
    live_link: "",
  },
  {
    name: "AR Solar System Simulation",
    description:
      "An immersive Augmented Reality educational app that brings the Solar System into your space using Unity and Vuforia. Perfect for science learners, teachers, and space enthusiasts!",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "ar",
        color: "green-text-gradient",
      },
      {
        name: "vuforia",
        color: "pink-text-gradient",
      },
    ],
    image: arSolarSystem,
    source_code_link: "https://github.com/shivakantkurmi/AR-Solar-System-Simulation-App.git",
    live_link: "",
  },
   
  {
    name: "Automated Attendance System",
    description:
      "A facial recognition-based attendance system using Python, OpenCV, and Pandas, achieving 93% accuracy in identifying and logging student presence automatically.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: attendanceSystem,
    source_code_link: "https://github.com/shivakantkurmi/Face-Recognition.git",
    live_link: "",
  },

];

export { services, technologies, experiences, testimonials, projects };