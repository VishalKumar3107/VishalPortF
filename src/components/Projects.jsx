import React, { useRef, useEffect } from "react";
import "./Projects.css";
import follow from "../assets/follow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (evt) => {
      const delta = Math.max(-1, Math.min(1, evt.deltaY));
      if (Math.abs(delta) > 0) {
        evt.preventDefault(); // Prevent vertical scrolling
      }
      scrollContainer.scrollLeft += delta * 50; // Adjust scrolling speed by changing the multiplier
    };

    scrollContainer.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleMouseEnter = (event) => {
    const video = event.target;
    video.play();
    video.muted = true;
  };

  const handleMouseLeave = (event) => {
    const video = event.target;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="Projectscontainer">
      <div className="Projectrow"  ref={scrollContainerRef}>
      {projectList.map((project) => (
          <div
            className={`projectBox`}
            key={project.id}
          >
            <div className="projectBoxContainer">
            <div className="videoBox">
              <video
                src={project.videoLink}
                alt={project.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                loop
              />
            </div>
            <div className="textBox">
              <div className="text text1">{project.name}</div>
              <div className="text text2"><a href={project.url}>Follow&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSquareArrowUpRight} /></a></div>
            </div>
          </div>
          </div>
        ))}
        <div className="projectBox">
          <div className="lastImage">
            <img src={follow} alt="follow" />
          </div>
          <div className="lastText">
              <div className="lastTextBig">
              There<br/> is <br/>more<br/> to <br/>explore!
              </div>
              <Link to="/projects" style={{textDecoration:"none"}}>
              <div className="lastTextSmall">
              <FontAwesomeIcon icon={faArrowRight} /> &nbsp;&nbsp;Go to Projects
              </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


const projectList = [
  {
    id: 1,
    name: "FlavourFeed",
    url: "https://646f05b9a13e220fba97ed67--shimmering-macaron-948498.netlify.app/",
    videoLink: "../videos/FullStackFlavourfeed.mp4",
  },
  {
    id: 2,
    name: "LinkedIn Replica",
    url: "https://6476de41a059a061bfab3bd6--gentle-sunflower-733b56.netlify.app/",
    videoLink: "../videos/LinkedIn.mp4",
  },
  {
    id: 3,
    name: "PrimeVideo",
    url: "https://6474a9896d456f7eb511f9d5--magical-blini-91bf35.netlify.app/",
    videoLink: "../videos/prime.mp4",
  },
  {
    id: 4,
    name: "HopeRise",
    url: "https://hoperise.netlify.app/",
    videoLink: "../videos/HopeRise.mp4",
  },
  // {
  //   id: 5,
  //   name: "NewsFeed",
  //   url: "https://fanciful-gelato-cef24d.netlify.app/",
  //   videoLink: "../videos/MyNewsFeed.mp4",
  // },
  // {
  //   id: 6,
  //   name: "Decathlon Clone",
  //   url: "https://6473182e12cf410c8ea844f6--remarkable-lokum-ae542b.netlify.app/",
  //   videoLink: "../videos/Decath.mp4",
  // },
  // {
  //   id: 7,
  //   name: "Medicare",
  //   url: "https://dulcet-cocada-2b1352.netlify.app/",
  //   videoLink: "../videos/Medicare.mp4",
  // },
  // {
  //   id: 8,
  //   name: "Hypechat",
  //   url: "#",
  //   videoLink: "../videos/Hypechat.mp4",
  // }
];