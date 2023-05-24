import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences" ]';
    const skillsQuery = '*[_type == "skills" ]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <>
      <h2 className="headText">Skills & Experience</h2>
      <div className="skills__container">
        <motion.div className="skillList">
          {skills?.map((skill) => (
            <motion.div
              className="skillList__item flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
            >
              <div className="flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="pText">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="expList">
          {experiences?.map((experience) => (
            <motion.div className="expList__item" key={experience.year}>
              <div className="yearPoint">
                <p className="boldText">{experience.year}</p>
              </div>
              <motion.div className="workPoint">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="workPoint__item"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="boldText">{work.name}</h4>
                      <p className="pText">{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="tooltip"
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills", "whiteBg");
