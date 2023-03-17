import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, livelink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-white font-bold text-[24px] flex justify-start">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=" hover:text-pink-500   cursor-pointer"
            >
              {name}
            </div>
            {/*may be good or not */}
            {/* <div className="flex justify-center items-center ml-4 card-img_hover">
              <div
                // onClick={() => window.open(source_code_link, "_blank")}
               
                className="hover:bg-gradient-to-r  hover:via-purple-500  hover:from-indigo-500 hover:to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={livelink}
                  alt="Live Link"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div> */}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          //fadeIn(direction, type, delay, duration)
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have worked on several projects that prove my skills and experience
          with real-life examples. Each project is briefly explained and
          includes links to the code and live demos. These projects show that I
          can solve difficult problems, work with different technologies, and
          manage projects well.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
