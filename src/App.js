import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default App;