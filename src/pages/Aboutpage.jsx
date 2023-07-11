import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Gettoknowme from '../components/About/Gettoknowme';
import { Footer } from '../components/Footer';
import FullPageTransition from '../components/Threejs/Transition';

const Aboutpage = () => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2500);
  }, []);

  return (
    <div className='Aboutpage'>
      {showTransition && <FullPageTransition />}
      <Navbar activeIndex={2} />
      <Gettoknowme/>
      <Footer/>
    </div>
  )
}

export default Aboutpage;
