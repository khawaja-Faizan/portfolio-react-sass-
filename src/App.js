import * as React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./view/about/about";
import Contact from "./view/contact/contact";
import Home from "./view/home/home";
import Projects from "./view/projects/projects";
import Navbar from "./components/shared/nav/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
