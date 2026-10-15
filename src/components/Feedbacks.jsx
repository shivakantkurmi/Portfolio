import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaTrophy, FaMedal, FaCertificate, FaStar } from "react-icons/fa";
import { 
  SiLeetcode, 
  SiGeeksforgeeks, 
  SiCodeforces, 
  SiHackerrank,
  SiAmazonaws
} from "react-icons/si";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// A reusable card for coding profiles, now showing rank
const ProfileCard = ({ name, rank, icon, link, colorClass }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 flex flex-col items-center justify-center p-6 bg-tertiary rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${colorClass}`}
  >
    <div className="text-5xl mb-3">{icon}</div>
    <h4 className="text-white text-xl font-bold">{name}</h4>
    <p className="text-white-100 text-md mt-1 text-center">{rank}</p>
  </a>
);

// Achievement card
const AchievementCard = ({ icon, title, description, color }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className={`flex items-start gap-4 p-5 bg-tertiary rounded-xl shadow-lg border-l-4 ${color}`}
  >
    <div className="text-3xl mt-1 flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-white text-lg font-bold">{title}</h4>
      <p className="text-secondary text-sm mt-1">{description}</p>
    </div>
  </motion.div>
);

const Profiles = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[450px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've Achieved</p>
          <h2 className={styles.sectionHeadText}>Profiles & Resume.</h2>
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-8"
          variants={fadeIn("up", "spring", 0.2, 0.75)}
        >
          <ProfileCard
            name="LeetCode"
            rank="Global Rank: 22,987 | 1000+ Problems | Knight Badge"
            icon={<SiLeetcode />}
            link="https://leetcode.com/u/Shivakant_kurmi/"
            colorClass="hover:bg-yellow-600"
          />
          <ProfileCard
            name="GeeksforGeeks"
            rank="Institute Rank: 4/3856 | 1000+ Problems"
            icon={<SiGeeksforgeeks />}
            link="https://www.geeksforgeeks.org/user/shivakant_kurmi_23bcg10140/"
            colorClass="hover:bg-green-600"
          />

          <ProfileCard
              name="HackerRank"
              rank="5★ C++ | Problem Solving"
              icon={<SiHackerrank />}
              link="https://www.hackerrank.com/profile/shivakantkurmi49"
              colorClass="hover:bg-emerald-600"
          />
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={textVariant()}
          className="mt-14"
        >
          <p className={styles.sectionSubText}>Awards & Recognition</p>
          <h3 className="text-white font-bold text-[26px] mb-6">Achievements.</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={fadeIn("up", "spring", 0.3, 0.75)}
        >
          <AchievementCard
            icon={<FaTrophy className="text-yellow-400" />}
            title="BeHackFest — 3rd Place"
            description="Secured 3rd place (Individual Category) at BeHackFest, a hackathon organized by Bloom Energy, competing against top developers."
            color="border-yellow-400"
          />
          <AchievementCard
            icon={<FaMedal className="text-orange-400" />}
            title="District Topper — MP Board 2023"
            description="Achieved the highest score in the entire district in the Madhya Pradesh Board Examination, scoring 95%."
            color="border-orange-400"
          />
          <AchievementCard
            icon={<FaStar className="text-purple-400" />}
            title="LeetCode Knight Badge"
            description="Earned the prestigious Knight Badge on LeetCode (Top 5% globally) with 1000+ problems solved and a global rank of 22,987."
            color="border-purple-400"
          />
          <AchievementCard
            icon={<FaCertificate className="text-blue-400" />}
            title="AWS Certified Cloud Practitioner"
            description="Certified by Amazon Web Services, demonstrating foundational expertise in cloud computing, AWS services, and cloud architecture."
            color="border-blue-400"
          />
          <AchievementCard
            icon={<FaStar className="text-green-400" />}
            title="GFG Institute Rank 4 / 3856"
            description="Ranked 4th out of 3856 students in institute rankings on GeeksforGeeks with 1000+ problems solved."
            color="border-green-400"
          />
          <AchievementCard
            icon={<FaTrophy className="text-indigo-400" />}
            title="STARS Scheme — VIT Bhopal"
            description="Selected for the prestigious STARS Scheme at VIT Bhopal University for outstanding academic performance with a CGPA of 9.83/10.0."
            color="border-indigo-400"
          />
        </motion.div>

        {/* Extra-Curricular */}
        <motion.div
          variants={textVariant()}
          className="mt-14"
        >
          <p className={styles.sectionSubText}>Beyond Coding</p>
          <h3 className="text-white font-bold text-[26px] mb-6">Extra-Curricular & Volunteering.</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={fadeIn("up", "spring", 0.4, 0.75)}
        >
          <AchievementCard
            icon={<FaStar className="text-cyan-400" />}
            title="Student Volunteer — Cognizant Drive"
            description="Assisted in coordinating the Cognizant campus recruitment drive at VIT Bhopal University, managing logistics and candidate communication."
            color="border-cyan-400"
          />
          <AchievementCard
            icon={<FaStar className="text-pink-400" />}
            title="Core Member — VRGC Club"
            description="Active core member of the VIT Reality & Gaming Club (VRGC), contributing to technical events, workshops, and gaming/VR activities."
            color="border-pink-400"
          />
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="mt-12 flex justify-center"
          variants={fadeIn("up", "spring", 0.4, 0.75)}
        >
          <a
            href="/Shivakant_Kurmi_Resume.pdf"
            download
            className="flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload className="mr-3" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// The second argument is the section ID for the navigation bar
export default SectionWrapper(Profiles, "profiles");
