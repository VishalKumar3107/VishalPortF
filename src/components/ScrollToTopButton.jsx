import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling animation
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
