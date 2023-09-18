import React from "react";

import Navbar from "../../components/shared/nav/navbar";
import Footer from "../../components/shared/footer/footer";

const Home = () => {
  return (
    <>
      <main>
        <section className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Khawaja <span className="home__name--last">Faizan</span>
          </h1>
          <h2>Web Developer & Programmer</h2>

          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
