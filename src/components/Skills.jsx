import React, { useState } from "react";
import "./Skills.css";
import html from "../../icons/html5.png";
import css from "../../icons/css.png";
import js from "../../icons/js.png";
import react from "../../icons/react.png";
import node from "../../icons/nodejs.png";
import mongo from "../../icons/mongodb.png";
import boot from "../../icons/bootstrap.png";
import express from "../../icons/express.png";
import firebase from "../../icons/firebase.png";
import git from "../../icons/git.png";
import logoRed from "../assets/logoRed.png";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="Skills">
      <div className="Skillsheading">
        <button onClick={handleOpen} className="pulse">
          <img src={logoRed} />
        </button>
        <div className="Skillsheadingone">Skills and Expertise</div>
        <div className="Skillsheadingtwo">
          I possess a diverse range of soft skills that enhance my ability to
          collaborate, communicate, and adapt in various work environments. With
          exceptional interpersonal skills, I foster positive relationships and
          effective teamwork. My strong problem-solving and critical thinking
          abilities enable me to approach challenges with a proactive mindset.
          Moreover, I am known for my strong work ethic, time management skills,
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-contents">
            <div className="modal-contentBox">
              <div className="textone">
                <button className="gobackbtn" onClick={handleClose}>
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                  </svg>
                  <span>Back</span>
                </button>
              </div>
              <div className="texttwos">Skills <br/>
              Learning</div>
              <div className="modal-content-text">
                <div className="modal-content-logo">
                  <img src={logoRed} />
                </div>
                <div className="modaltextone">
                  In addition to my current skill set, I am actively expanding
                  my knowledge and proficiency in several cutting-edge frontend
                  technologies. I am currently immersed in learning Next.js, an
                  exciting framework that allows for efficient and scalable web
                  development. Additionally, I am exploring Tailwind CSS, a
                  utility-first CSS framework that empowers me to build modern
                  and responsive user interfaces.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="SkillsContainer">
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={html} />
            {/* <i class="fa-brands fa-html5"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={css} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={js} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={boot} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={react} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={firebase} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={node} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={express} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={mongo} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <img src={git} />
            {/* <i className="fab fa-facebook"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
