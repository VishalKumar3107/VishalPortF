import one from "../../assets/lr.png"
import two from "../../assets/ff.png"
import three from "../../assets/pc.png"
import four from "../../assets/dc.png"
import five from "../../assets/hr.png"
import six from "../../assets/hc.png"
import seven from "../../assets/nf.png"
import eight from "../../assets/mc.png"
import React from "react";
import "./ProjectsByMe.css";

const ProjectByMe = () => {
  const projects = [
    { id: "01", title: "LinkedIn Replica", image: one, url:"https://6476de41a059a061bfab3bd6--gentle-sunflower-733b56.netlify.app/" },
    { id: "02", title: "Flavourfeed", image: two, url:"https://646f05b9a13e220fba97ed67--shimmering-macaron-948498.netlify.app/" },
    { id: "03", title: "Prime video clone", image: three, url:"https://6474a9896d456f7eb511f9d5--magical-blini-91bf35.netlify.app/" },
    { id: "04", title: "Decathlone clone", image: four, url:"https://6473182e12cf410c8ea844f6--remarkable-lokum-ae542b.netlify.app/" },
    { id: "05", title: "Hoperise", image: five, url:"https://hoperise.netlify.app/" },
    { id: "06", title: "hypechat", image: six, url:"#" },
    { id: "07", title: "newsfeed", image: seven, url:"https://fanciful-gelato-cef24d.netlify.app/" },
    { id: "08", title: "medicare", image: eight, url:"https://dulcet-cocada-2b1352.netlify.app/" },
  ];

  return (
    <div className="ProjectByMe">
      <div className="ProjectMeContainer">
        {projects.map((project) => (
          <div className="ProjectCardBox" key={project.id}>
            <div className="ProjectCard">
              <div className="ProjectCardImage">
                <img src={project.image} alt="ProjectImage" />
              </div>
              <div className="ProjectCardText">
                <h3>{project.id}</h3>
                <a href={project.url}><h3>{project.title}</h3></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectByMe;
