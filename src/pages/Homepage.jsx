import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Craft from "../components/Craft";
import Comments from "../components/Comments";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import FullPageTransition from "../components/Threejs/Transition";

const Homepage = () => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2500);
  }, []);
  return (
    <div className="Homepage">
      {showTransition && <FullPageTransition />}
      <Navbar activeIndex={0} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Craft />
      <Comments />
      <Footer />
    </div>
  );
};

export default Homepage;
