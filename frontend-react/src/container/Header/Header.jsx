import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="header flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="badge flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="pText">Hello, I'm</p>
              <h1 className="headText">Jeff</h1>
            </div>
          </div>
          <div className="tag flex">
            <p className="pText">Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delayChildren: 0.5 }}
        className="header__img"
      >
        <img
          src="https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/profile.png"
          alt="profile as background"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlayCircle"
          src="https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/circle.svg"
          alt="circle behind profile image"
        ></motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header__circles"
      >
        {[
          "https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/javascript.png",
          "https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/react.png",
          "https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/sass.png",
        ].map((circle, index) => (
          <div className="circle flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
