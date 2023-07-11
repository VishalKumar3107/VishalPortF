import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProjectByMe from '../components/About/ProjectByMe'
import { Footer } from '../components/Footer'
import FullPageTransition from '../components/Threejs/Transition'

const Projectpage = () => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2500);
  }, []);
  return (
    <div className='Projectpage'>
      {showTransition && <FullPageTransition />}
      <Navbar activeIndex={1}/>
      <ProjectByMe/>
      <Footer/>
    </div>
  )
}

export default Projectpage