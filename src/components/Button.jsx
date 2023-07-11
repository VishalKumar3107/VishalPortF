import React, { useState } from "react";
import "./Button.css";
import ContactForm from "./About/ContactForm";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STYLES = ["btn-primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [isShown, setIsShown] = useState(false);

  const handleButtonClick = () => {
    setIsShown(!isShown);
    onClick(); // Trigger the onClick event passed from the parent component
  };
  
  const handleBack =() =>{
    setIsShown(false);
  }

  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={handleButtonClick}
      >
        {children}
      </button>
      {isShown && <div className="slide-in-content">
        <button className="contactClose" onClick={handleBack}><FontAwesomeIcon icon={faCircleXmark} /></button>
        <ContactForm/>
        </div>}
    </>
  );
};

export default Button;
