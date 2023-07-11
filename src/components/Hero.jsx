import React, { useState, useEffect } from "react";
import "./Hero.css";
import Button from "./Button";
import logoRed from "../assets/logoRed.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Canvas } from "react-three-fiber";
import Boy from "../assets/Boy.png";

const Hero = () => {
  const words = ["skilled", "experienced", "talented", "dedicated"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { scrollY } = useViewportScroll();

  const scale = useTransform(scrollY, [0, window.innerHeight], [2.7, .45]); // Scale from 2x to 1x based on window height
  const translateY = useTransform(scrollY, [0, window.innerHeight], [0, 350]); // Adjust final position (translateY) based on window height
  const translateX = useTransform(scrollY, [0, window.innerHeight], [-10, -100]); // Adjust final position (translateY) based on window height

  
  return (
    <div className="Hero">
      <div className="HeroLeft">
        <img src={Boy} className="snmallScreen"/>
        <motion.div
          className="image-container"
          style={{
            scale: scale,
            translateY: translateY,
            translateX: translateX,
          }}
        >
          <img src={Boy} alt="FullscreenImage" className="image" />
        </motion.div>
      </div>
      <div className="HeroRight">
        <div className="HeroRightone">
          <div className="HeroRightText">
            <button onClick={handleOpen} className="pulse">
              <img src={logoRed} />
            </button>
            {isOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
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
                    <div className="texttwo">
                      Full Stack <br />
                      Web Developer
                    </div>
                    <div className="textthree">I,m Vishal Kumar</div>
                    <div className="modal-content-text">
                      <div className="modal-content-logo">
                        <img src={logoRed} />
                      </div>
                      <div className="modaltextone">
                        I am dedicated to taking your web application to new
                        heights, ensuring it is effortlessly customizable,
                        consistently reliable, and flawlessly tailored to your
                        requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="textone">
              Hi, I'm Vishal,
              <span className="highlight"> a {words[currentIndex]}</span>
            </div>
            <div className="texttwo">
              full stack <br />
              web developer
            </div>
            <div className="textone">you need for your project !</div>
          </div>
        </div>
        <div className="HeroRighttwo">
          <div className="HeroRightText">
            <button onClick={handleOpen} className="pulsetwo">
              <img src={logoRed} />
            </button>
            {isOpen && (
              <div
                initial={{ opacity: 0, scale: 0.5 }}
                anim
                className="modal-overlay"
              >
                <div className="modal-content">
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
                    <div className="texttwo">
                      full stack <br />
                      web developer
                    </div>
                    <div className="textthree">I,m Vishal Kumar</div>
                    <div className="modal-content-text">
                      <div className="modal-content-logo">
                        <img src={logoRed} />
                      </div>
                      <div className="modaltextone">
                        As your full stack developer, I take pride in delivering
                        websites that not only serve your needs but exceed your
                        expectations. Allow me to showcase the transformative
                        power of a website that not only fulfills its purpose
                        but also enhances your overall experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="textone">I'm a certified</div>
            <div className="texttwo">web developer</div>
            <div className="textonesmall">
              I specialize in crafting bespoke experiences that go beyond the
              ordinary. From building intricate custom functionalities to
              designing cohesive and scalable landing pages, I bring a
              meticulous approach to every project. Let's collaborate to create
              a remarkable online presence tailored exclusively for your needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
