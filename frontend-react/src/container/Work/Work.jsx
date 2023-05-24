import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { urlFor, client } from "../../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="headText">
        My <span>Projects</span>
      </h2>
      <div className="work__filter">
        {["UI/UX", "Web App", "Mobile Apps", "ReactJS", "All"].map((item, index) => (
          <div
            className={`filterItem flex pText ${activeFilter === item ? "filterItem--active" : ""}`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        className="work__portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div className="portfolioItem flex" key={index}>
            <div className="portfolioImg flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                className="portfolioImg--hover flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, staggerChildren: 0.5, ease: "easeInOut" }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="portfolioContent flex">
              <h4 className="boldText">{work.title}</h4>
              <p className="pText" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="tag flex">
                <p className="pText">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "work"), "work", "primaryBg");
