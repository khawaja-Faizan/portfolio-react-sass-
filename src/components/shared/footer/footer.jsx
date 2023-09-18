import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="social-icons">
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default Footer;
