import React, { useEffect, useRef } from "react";
import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Comments = () => {
  const controls = useAnimation();
  const commentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        }
      });
    });

    if (commentRef.current) {
      observer.observe(commentRef.current);
    }

    return () => {
      if (commentRef.current) {
        observer.unobserve(commentRef.current);
      }
    };
  }, []);

  return (
    <div className="Comments">
      <h1>Whats the gossip?</h1>
      <div className="CommentsContainer">
        <motion.div
          className="commentaTop"
          ref={commentRef}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 1.8 }}
        >
          {CommentRowOne.map((comment) => (
            <div className="card" key={comment.id}>
              <div className="card-name">{comment.textHeading}</div>
              <div className="quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 330 307"
                  height="80"
                  width="80"
                >
                  <path
                    fill="currentColor"
                    d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
                  ></path>
                </svg>
              </div>
              <div className="body-text">{comment.comment}</div>
              <div className="author">
                - by {comment.author}
                <br /> <span>{comment.designation}</span>
              </div>
              <svg
                height="0"
                width="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H24V24H0z" fill="none"></path>
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="commentaBottom"
          ref={commentRef}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 1.8 }}
        >
          {CommentRowTwo.map((comment) => (
            <div className="card" key={comment.id}>
              <div className="card-name">{comment.textHeading}</div>
              <div className="quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 330 307"
                  height="80"
                  width="80"
                >
                  <path
                    fill="currentColor"
                    d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
                  ></path>
                </svg>
              </div>
              <div className="body-text">{comment.comment}</div>
              <div className="author">
                {comment.author}
                <br /> <span>{comment.designation}</span>
              </div>
              <svg
                height="0"
                width="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H24V24H0z" fill="none"></path>
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
            </div>
          ))}
          <div className="cardc">
            <div className="body-text">THIS SPOT IS RESERVED FOR YOU</div>
            <Link to={"/contact"}>
            <div className="author">
              Lets chat <FontAwesomeIcon icon={faSquareArrowUpRight} />
              <br />
            </div>
            </Link>
            <svg
              height="0"
              width="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H24V24H0z" fill="none"></path>
              <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comments;

const CommentRowOne = [
  {
    id: 1,
    author: "Virgil Prashad",
    designation: "Senior Marketing Manager",
    textHeading: "I love the bold.",
    comment:
      "He's not only a quick problem solver, but understands how to offer solutions that have longer shelf life rather than quick fixes.",
  },
  {
    id: 2,
    author: "Sophia Chen",
    designation: "CTO",
    textHeading: "Highly skilled and reliable.",
    comment:
      "His expertise in both front-end and back-end development makes him a valuable asset to any development team. He consistently delivers high-quality code and meets project deadlines.",
  },
  {
    id: 3,
    author: "Michael Rodriguez",
    designation: "UI/UX Designer",
    textHeading: "Collaborative and creative.",
    comment:
      "Working with him was a pleasure. He actively collaborated with the design team, providing valuable input and implementing pixel-perfect designs with attention to detail.",
  },
  {
    id: 4,
    author: "Emily Johnson",
    designation: "Project Manager",
    textHeading: "Reliable and efficient.",
    comment:
      "He consistently demonstrated professionalism and efficiency in completing assigned tasks. His ability to understand project requirements and deliver high-quality results is commendable.",
  },
  {
    id: 5,
    author: "Daniel Lee",
    designation: "Full Stack Developer",
    textHeading: "Great team player.",
    comment:
      "Working alongside him was a pleasure. He's always willing to lend a hand, share knowledge, and collaborate with team members to achieve project goals.",
  },
  {
    id: 10,
    author: "Jessica Adams",
    designation: "Software Engineer",
    textHeading: "Creative problem solver.",
    comment:
      "His creative thinking and problem-solving abilities shine through in every project. He consistently finds unique solutions to complex problems, pushing the boundaries of what's possible.",
  },
  {
    id: 11,
    author: "Richard Wilson",
    designation: "DevOps Engineer",
    textHeading: "Efficient deployment process.",
    comment:
      "He streamlined our deployment process, reducing time and effort. His expertise in automation and infrastructure management greatly improved our development workflow.",
  },
];

const CommentRowTwo = [
  {
    id: 6,
    author: "- by Samantha Clark",
    designation: "CEO",
    textHeading: "Excellent problem solver.",
    comment:
      "He has a strong problem-solving mindset and consistently finds innovative solutions to complex technical challenges. His ability to think critically and propose effective solutions is impressive.",
  },
  {
    id: 7,
    author: "- by Robert Johnson",
    designation: "Front-End Developer",
    textHeading: "Attention to detail.",
    comment:
      "His attention to detail in writing clean, maintainable code is exceptional. He pays great attention to UI/UX details, resulting in delightful user experiences.",
  },
  {
    id: 8,
    author: "- by Isabella Thompson",
    designation: "Product Manager",
    textHeading: "Efficient and proactive.",
    comment:
      "He takes ownership of his work, proactively identifies potential issues, and suggests improvements. His dedication to delivering high-quality work within deadlines is commendable.",
  },
  {
    id: 9,
    author: "- by David Brown",
    designation: "Backend Developer",
    textHeading: "Strong technical skills.",
    comment:
      "His deep understanding of backend technologies and ability to optimize server-side processes greatly contributed to the success of our projects. He's a reliable and skilled developer.",
  },
  {
    id: 12,
    author: "- by Alexandra Martin",
    designation: "UI Designer",
    textHeading: "Exceptional design execution.",
    comment:
      "His ability to translate design concepts into polished user interfaces is remarkable. He pays attention to every detail, resulting in visually stunning and user-friendly designs.",
  },
  {
    id: 13,
    author: "- by John Smith",
    designation: "Software Architect",
    textHeading: "Exceptional technical expertise.",
    comment:
      "His deep understanding of software architecture and design patterns greatly contributed to the scalability and maintainability of our projects. He consistently delivered robust and efficient solutions.",
  },
  //   {
  //     id: 10,
  //     author: "Lets chat",
  //     designation: "",
  //     textHeading: "",
  //     comment:"THIS SPOT IS RESERVED FOR YOU"
  //   }
];
