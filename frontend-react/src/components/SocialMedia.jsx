import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="social">
      <div>
        <a href="https://twitter.com/deutsch_jeff" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jeffadeutsch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/jadeutsch" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
