import React from "react";
import Navbar from "../../components/shared/nav/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import projectImage from "../../assets/images/prj-1.jpg";

const Projects = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="projects">
          <div className="projects__bio-image">
            <h1 className="text-secondary">My Projects</h1>
          </div>
          <div className="projects__items">
            <div className="projects__item">
              <img src={projectImage} alt="Myproject (1)" />
              <div className="projects__btns">
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faEye} /> Preview
                </a>
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faGithub} /> github
                </a>
              </div>
            </div>
            <div className="projects__item">
              <img src={projectImage} alt="Myproject (1)" />
              <div className="projects__btns">
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faEye} /> Preview
                </a>
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faGithub} /> github
                </a>
              </div>
            </div>
            <div className="projects__item">
              <img src={projectImage} alt="Myproject (1)" />
              <div className="projects__btns">
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faEye} /> Preview
                </a>
                <a href="#" className="projects__btn">
                  <FontAwesomeIcon icon={faGithub} /> github
                </a>
              </div>
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
export default Projects;
