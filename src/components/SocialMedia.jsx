import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/felipe-main" target='_blank' rel='noreferrer'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/felipe-raimundo-dos-santos/" target='_blank' rel='noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
