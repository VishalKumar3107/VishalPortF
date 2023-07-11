import React, { useRef, useEffect, useState }from "react";
import "./Craft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import logoRed from "../assets/logoRed.png";
import { motion, useAnimation  } from "framer-motion";

const Craft = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="Craft">
      <div className="CraftContainer">
        <div className="CraftContainerRight" ref={containerRef}>
            <motion.div
              className="CraftContainerRightone"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 1 }}
            >
              <FontAwesomeIcon className="iconPlus" icon={faPlus} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crafting digital realms <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where ideas
              thrive.
            </motion.div>
            <motion.div
              className="CraftContainerRighttwo"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 2 }}
            >
              <FontAwesomeIcon className="iconPlus" icon={faPlus} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transforming pixels and logic <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;into magic.
            </motion.div>
            <motion.div
              className="CraftContainerRightthree"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 3 }}
            >
              <FontAwesomeIcon className="iconPlus" icon={faPlus} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weaving technology tapestries that
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inspire awe.
            </motion.div>
        </div>
        <button onClick={handleOpen} className="pulset">
          <img src={logoRed} />
        </button>
        <div className="CraftContainerLeft">What I love to Craft</div>
      </div>
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
              <div className="texttwoss">Craft</div>
              <div className="textthree">By Vishal Kumar</div>
              <div className="modal-content-text">
                <div className="modal-content-logo">
                  <img src={logoRed} />
                </div>
                <div className="modaltextone">
                  I take each project as a reference for my work. Therefore, in
                  most cases, the website reflects the craft of the developer
                  and the actual client himself.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Craft;
