import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import logoBlue from "../assets/logoBlue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeIndex }) => {
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(activeIndex);
  const [isVisible, setIsVisible] = useState(false);
  const nav = useNavigate();

  const handleButtonClick = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  const handleItemClick = useCallback(
    (index) => {
      setActiveItem(index);
      const item = menuItems[index];
      if (item && item.url) {
        window.scrollTo(0, 0);
        nav(item.url, { state: { activeItem: index } });
      }
    },
    [nav]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(activeItem);
  }, [activeItem]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <h1 className="navbar-logo">
        <img className="logo-image" src={logoBlue} alt="Logo" />
      </h1>
      <div className="menu-icon" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={active ? faTimes : faBars} />
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={`${item.cName} ${index === activeItem && "active"}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button onClick={handleButtonClick}>Get in Touch</Button>
    </nav>
  );
};

export default React.memo(Navbar);
