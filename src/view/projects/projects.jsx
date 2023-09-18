import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import projectImage from "../../assets/images/prj-1.jpg";
import Footer from "../../components/shared/footer/footer";

const Projects = () => {
  return (
    <>
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

          <Footer />
        </section>
      </main>
    </>
  );
};
export default Projects;
