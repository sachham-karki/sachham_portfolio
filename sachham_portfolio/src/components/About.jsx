import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {vic} from "../assets";
import { Tilt } from "react-tilt"; // Updated import statement

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
  <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);





const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a qualified Software Developer with experience in HTML, CSS, JavaScript, React, Java, Spring, Spring Boot, C#, .Net, Python, PHP and, frameworks like React, Node.js, Express, .NET Core, Laravel, Spring & Spring Boot also,  database such as MySQL, PostgreSQL and MongoDB. 

        
        Open to learn new things and collaborate closely with team to create efficient, scalable, and user-friendly solutions that solve real-world problems.
        
        I am a problem solver and quick learner. If you show me how to do somthing once, I can quickly pick that up.
      </motion.p>
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Education</h2>
      <p className={styles.sectionSubText}><b><img src={vic} alt="vic logo" className="inline-block w-9 h-9 mr-4"  />  Victoria University</b></p>
      </motion.div>
      <motion.p  variants={fadeIn("", "", 0.1, 1)}
        className='ml-10 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
     >
     <a href="https://drive.google.com/file/d/1NEhvWsHPnN7pTWY84OEfHPsCn3oU42qM/view?usp=sharing">
      <u>Bachelor Of Information Technology (2019 - 2022)
     </u>
     </a>
     </motion.p>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
