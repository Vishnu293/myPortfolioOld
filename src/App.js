import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Certify from "./Certify";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Certify/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
