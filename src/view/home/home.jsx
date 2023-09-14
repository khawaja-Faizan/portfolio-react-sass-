import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../components/shared/nav/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Khawaja <span className="home__name--last">Faizan</span>
          </h1>
          <h2>Web Developer & Programmer</h2>

          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
