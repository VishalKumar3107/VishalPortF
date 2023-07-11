import React from 'react';
import './Transition.css';

const FullPageTransition = () => {
  return (
    <div className="transition-container">
      <div className="transition-row" style={{ animationDelay: '0s' }}></div>
      <div className="transition-row" style={{ animationDelay: '0.2s' }}></div>
      <div className="transition-row" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export default FullPageTransition;
