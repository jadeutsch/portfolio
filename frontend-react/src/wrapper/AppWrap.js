import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`container ${classNames}`}>
        <SocialMedia />
        <div className="wrapper flex">
          <Component />
          <div className="copyright">
            <p className="pText">&copy;{new Date().getFullYear()} Jeff Deutsch</p>
            <p className="pText">All rights reserved.</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
