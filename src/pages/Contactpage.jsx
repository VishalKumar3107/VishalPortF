import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Contactme from '../components/About/Contactme'
import FullPageTransition from '../components/Threejs/Transition';


const Contactpage = () => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2500);
  }, []);
  return (
    <div className='Contactpage'>
      {showTransition && <FullPageTransition />}
        <Navbar activeIndex={3}/>
        <Contactme/>
    </div>
  )
}

export default Contactpage