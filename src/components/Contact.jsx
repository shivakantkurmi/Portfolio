import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"; // Imported FaGithub

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        {/* Container for social media icons */}
        <div className='mt-12 flex flex-row justify-center gap-10'>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/shivakant-kurmi-15339428a"
            target='_blank'
            rel='noopener noreferrer'
            aria-label="LinkedIn Profile"
            className='text-blue-500 text-[44px] hover:text-blue-600 hover:scale-110 transition-all duration-300'
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/shivakantkurmi"
            target='_blank'
            rel='noopener noreferrer'
            aria-label="GitHub Profile"
            className='text-gray-400 text-[44px] hover:text-white hover:scale-110 transition-all duration-300'
          >
            <FaGithub />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:shivakantkurmi49@gmail.com"
            aria-label="Email"
            className='text-red-500 text-[44px] hover:text-red-600 hover:scale-110 transition-all duration-300'
          >
            <FaEnvelope />
          </a>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
