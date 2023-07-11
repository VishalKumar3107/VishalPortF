import React from "react";
import "./Gettoknowme.css";
import { motion } from "framer-motion";
import HelloBoy from "../../assets/HelloBoy.png";

const Gettoknowme = () => {
  return (
    <div className="Gettoknowme">
      <div className="AboutHeadBox">
        <div className="AboutHeadBoxImage">
          <img src={HelloBoy} />
        </div>
        <div className="AboutHeadBoxText">
          <h1>
            Get to <br /> know me
          </h1>
          <p>
            Before we work together, here’s a peek behind the scenes at my
            approach, mindset and process.
          </p>
        </div>
      </div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Attention to Detail</h1>
        <p>
          I pay meticulous attention to details, whether it's analyzing
          requirements, designing robust solutions, or ensuring accuracy in my
          work. This quality is crucial in both civil engineering and full-stack
          development, guaranteeing the highest level of precision in every
          project.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Collaboration</h1>
        <p>
          Collaboration is at the core of my work ethic, fostering partnership
          and teamwork. I've successfully worked with multidisciplinary teams in
          civil engineering projects, and I bring the same collaborative spirit
          to full-stack development. Together, we create something meaningful
          and lasting.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Problem-Solving Skills</h1>
        <p>
          I excel at problem-solving, tackling complex challenges in optimizing
          code for performance and finding innovative solutions for structural
          engineering problems. Whether it's debugging a code issue or resolving
          an engineering dilemma, I approach each problem with tenacity and
          determination.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Analytical Thinking</h1>
        <p>
          Analytical thinking is my forte, allowing me to approach problems from
          a logical perspective. I break them down into manageable components,
          analyze data and evidence, and derive efficient solutions. This skill
          proves valuable in both civil engineering and full-stack development.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Effective Communication</h1>
        <p>
          I possess strong communication skills, both verbal and written, vital
          in civil engineering and full-stack development. I excel at explaining
          complex technical concepts to non-technical stakeholders, ensuring
          clear and transparent communication throughout the project lifecycle.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Time Management</h1>
        <p>
          I have a knack for managing time effectively and delivering projects
          within deadlines. Coordinating construction schedules in civil
          engineering has honed my skills in ensuring timely delivery. I apply
          these time management abilities to meet project milestones in
          full-stack development.
        </p>
      </motion.div>
      <motion.div
        className="AboutPageBox"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Continuous Learning</h1>
        <p>
          I am deeply committed to continuous learning and professional
          development. I stay updated with the latest trends, technologies, and
          best practices in both civil engineering and full-stack development.
          This enables me to deliver high-quality solutions that align with
          industry standards.
        </p>
      </motion.div>
    </div>
  );
};

export default Gettoknowme;
