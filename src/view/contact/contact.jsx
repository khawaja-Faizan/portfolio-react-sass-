import React from "react";
import Navbar from "../../components/shared/nav/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="contact">
          <h2>Contact Me</h2>

          <div className="contact__list">
            <div className="contact__email">
              <FontAwesomeIcon icon={faEnvelope} /> Email
              <div className="text-secondary">email@mail.com</div>
            </div>
            <div className="contact__phone">
              <FontAwesomeIcon icon={faPhone} /> Phone
              <div className="text-secondary">00000000000</div>
            </div>
            <div className="contact__address">
              <FontAwesomeIcon icon={faLocationDot} /> Address
              <div className="text-secondary">123,XYZ,Lahore</div>
            </div>
          </div>

          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} size="2xs" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} size="2xs" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
export default Contact;
