import React from "react";
import "./About.css";
import ParallaxComponent from "./Parallax";

const About = () => {
  
  return (
    <div className="About">
      <div className="AboutContainer">
        <div className="AboutLeft">
          <div className="AboutLeftone">ABOUT ME</div>
          <div className="AboutLefttwo">Passion Unleashed, Purpose Found</div>
          <div className="AboutLeftthree">
            As a Civil Engineering graduate with a B.Tech degree, my journey
            into the world of technology has been anything but conventional.
            Driven by an unwavering passion for technology and an insatiable
            appetite for learning and self-improvement, I am thrilled to embark
            on a new chapter as a Full Stack Developer. Despite having no prior
            experience in this field, I approach this transition with unwavering
            confidence in my ability to adapt, learn rapidly, and thrive.
          </div>
        </div>
        <div className="AboutRight">
          <ParallaxComponent/>
        </div>
      </div>
    </div>
  );
};

export default About;
