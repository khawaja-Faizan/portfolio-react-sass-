import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/shared/footer/footer";

const Contact = () => {
  return (
    <>
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

          <Footer />
        </section>
      </main>
    </>
  );
};
export default Contact;
