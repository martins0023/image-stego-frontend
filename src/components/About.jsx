import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { crop } from "../assets";
import { useNavigate } from "react-router-dom";
//import { web } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative w-full h-[230px] bg-tertiary rounded-[20px] py-1 px-1 flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-full h-full object-cover rounded-2xl"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {/*title*/}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/connectbackend")
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-4 text-secondary text-[17px]  leading-[30px]"
      >
        <div className="lg:flex lg:flex-row ">
          <div className="flex flex-col">
            <div className="">
              <div className="relative bg-[#0E243A] m-1 p-3 flex flex-col border-[#005FA6] border rounded-lg shadow-card w-full h-full object-cover lg:w-full">
                <p className="text-white font-bold">Private mode</p>
                <p className="text-white font-normal mt-3">
                  When run in private mode, this image stenography operates
                  entirely in the context of the web browser, so your data files
                  is not seen.
                </p>

                <button
                  onClick={handleNavigate}
                  className="mt-5 border-[#005FA6] border rounded-2xl text-[#2CB9F6] w-[100px] h-[30px] text-[12px] ">
                  Get Started
                </button>
              </div>
            </div>

            <div className="mt-3 bg-[#0E243A] text-white m-1 p-3 border-[#005FA6] border rounded-lg shadow-card w-full h-full object-cover lg:w-full">
              Bring your own storage
            </div>
            <div className="mt-3 bg-[#0E243A] text-white m-1 p-3 border-[#005FA6] border rounded-lg shadow-card w-full h-full object-cover lg:w-full">
              Self-hosted Options
            </div>
          </div>

          <div className="">
            <img src={crop} className="w-[400px] h-[400px]" alt="privacy" />
          </div>
        </div>
      </div>

      {/*<div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>*/}
    </>
  );
};

export default SectionWrapper(About, "about");
