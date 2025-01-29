import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;