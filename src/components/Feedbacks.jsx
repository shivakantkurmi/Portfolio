import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { 
  SiLeetcode, 
  SiGeeksforgeeks, 
  SiCodeforces, 
  SiHackerrank 
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
            rank="Global Rank: 39,569 && Knight (Top 0.5%)"
            icon={<SiLeetcode />}
            link="https://leetcode.com/u/Shivakant_kurmi/"
            colorClass="hover:bg-yellow-600"
          />
          <ProfileCard
            name="GeeksforGeeks"
            rank="Institute Rank: 7/3682"
            icon={<SiGeeksforgeeks />}
            link="https://www.geeksforgeeks.org/user/shivakant_kurmi_23bcg10140/"
            colorClass="hover:bg-green-600"
          />

          <ProfileCard
              name="Codeforces"
              rank="Competitive Programmer"
              icon={<SiCodeforces />}
              link="https://codeforces.com/profile/shivakantkurmi"
              colorClass="hover:bg-blue-600"
          />

          <ProfileCard
              name="HackerRank"
              rank="5★ C++"
              icon={<SiHackerrank />}
              link="https://www.hackerrank.com/profile/shivakantkurmi49"
              colorClass="hover:bg-emerald-600"
          />
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="mt-12 flex justify-center"
          variants={fadeIn("up", "spring", 0.4, 0.75)}
        >
          <a
            // NOTE: Place your resume in the 'public' folder of your project
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
