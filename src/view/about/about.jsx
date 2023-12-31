import React from "react";

import Footer from "../../components/shared/footer/footer";

const About = () => {
  return (
    <>
      <main>
        <section className="about">
          <div className="about__bio-image">
            <div className="about__bio">
              <h2 className="text-secondary">BIO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                officiis quod consectetur sunt nesciunt illo perferendis
                voluptate, illum similique! Maiores rerum qui, soluta magni quod
                necessitatibus similique. Quo, beatae libero.
              </p>
            </div>
          </div>
          <div className="jobs">
            <div className="jobs__job">
              {" "}
              <h2 className="text-secondary">2017-2022</h2>
              <h3>Google</h3>
              <h6>Front-end developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                officiis quod consectetur sunt nesciunt illo perferendis
                voluptate, illum similique! Maiores rerum qui, soluta magni quod
                necessitatibus similique. Quo, beatae libero.
              </p>
            </div>
            <div className="jobs__job">
              {" "}
              <h2 className="text-secondary">2015-2017</h2>
              <h3>Microsoft</h3>
              <h6>Front-end developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                officiis quod consectetur sunt nesciunt illo perferendis
                voluptate, illum similique! Maiores rerum qui, soluta magni quod
                necessitatibus similique. Quo, beatae libero.
              </p>
            </div>
            <div className="jobs__job">
              {" "}
              <h2 className="text-secondary">2012-2015</h2>
              <h3>Devsinc</h3>
              <h6>Front-end developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                officiis quod consectetur sunt nesciunt illo perferendis
                voluptate, illum similique! Maiores rerum qui, soluta magni quod
                necessitatibus similique. Quo, beatae libero.
              </p>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
};
export default About;
