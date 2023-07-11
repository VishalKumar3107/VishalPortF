// import React, { useState, useEffect, useRef } from "react";
// import Box from "./Threejs/threejsAbout";
// import { Canvas } from "react-three-fiber";

// const Parallax = () => {
//   const threshold = 500; // Adjust the threshold value as needed
//   const parallaxImageRef = useRef(null);
//   const [showImage, setShowImage] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setShowImage(scrollY > threshold);
//       parallaxImageRef.current.style.transform = `translateY(-${
//         scrollY * 0.5
//       }px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="parallax-container">
//       <div className="parallax-content">
//         {showImage && (
//           <div className="parallax-image" ref={parallaxImageRef}>
//             <div className="modalthreed">
//               <Canvas>
//                 <ambientLight />
//                 <pointLight position={[10, 10, 10]} />
//                 <group>
//                   {/* First row */}
//                   <Box imageUrl="l1.png" position={[-1.6, 1.55, -0.5]} />
//                   <Box imageUrl="l11.png" position={[-0.55, 1.55, 0.5]} />
//                   <Box imageUrl="h1.png" position={[0.55, 1.55, 0]} />
//                   <Box imageUrl="hp.png" position={[1.6, 1.55, 1]} />

//                   {/* Second row */}
//                   <Box imageUrl="l2.png" position={[-1.6, 0.5, 0]} />
//                   <Box imageUrl="l22.png" position={[-0.55, 0.5, 0.8]} />
//                   <Box imageUrl="h2.png" position={[0.55, 0.5, 0.5]} />
//                   <Box imageUrl="hp.png" position={[1.6, 0.5, 0]} />

//                   {/* Third row */}
//                   <Box imageUrl="l31.png" position={[-1.6, -0.55, 0.4]} />
//                   <Box imageUrl="l32.png" position={[-0.55, -0.55, 0.2]} />
//                   <Box imageUrl="h31.png" position={[0.55, -0.55, 0.8]} />
//                   <Box imageUrl="h32.png" position={[1.6, -0.55, 0]} />

//                   {/* Fourth row */}
//                   <Box imageUrl="l41.png" position={[-1.6, -1.6, 0]} />
//                   <Box imageUrl="l42.png" position={[-0.55, -1.6, 0.5]} />
//                   <Box imageUrl="h41.png" position={[0.55, -1.6, 0.2]} />
//                   <Box imageUrl="h42.png" position={[1.6, -1.6, 1]} />
//                 </group>
//               </Canvas>
//             </div>
//           </div>
//         )}
//         <div className="parallax-overlay"></div>
//       </div>
//     </div>
//   );
// };

// export default Parallax;





import React, { useState, useEffect, useRef } from "react";
import Box from "./Threejs/threejsAbout";
import { Canvas } from "react-three-fiber";

const Parallax = () => {
  const threshold = 500; // Adjust the threshold value as needed
  const parallaxImageRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowImage(scrollY > threshold);
      parallaxImageRef.current.style.transform = `translateY(-${
        scrollY * 0.5
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-content">
        {showImage && (
          <div className="parallax-image" ref={parallaxImageRef}>
            <div className="modalthreed">
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group>
                   {/* First row */}
//                   <Box imageUrl="l1.png" position={[-1.6, 1.55, -0.5]} />
//                   <Box imageUrl="l11.png" position={[-0.55, 1.55, 0.5]} />
//                   <Box imageUrl="h1.png" position={[0.55, 1.55, 0]} />
//                   <Box imageUrl="hp.png" position={[1.6, 1.55, 1]} />

//                   {/* Second row */}
//                   <Box imageUrl="l2.png" position={[-1.6, 0.5, 0]} />
//                   <Box imageUrl="l22.png" position={[-0.55, 0.5, 0.8]} />
//                   <Box imageUrl="h2.png" position={[0.55, 0.5, 0.5]} />
//                   <Box imageUrl="hp.png" position={[1.6, 0.5, 0]} />

//                   {/* Third row */}
//                   <Box imageUrl="l31.png" position={[-1.6, -0.55, 0.4]} />
//                   <Box imageUrl="l32.png" position={[-0.55, -0.55, 0.2]} />
//                   <Box imageUrl="h31.png" position={[0.55, -0.55, 0.8]} />
//                   <Box imageUrl="h32.png" position={[1.6, -0.55, 0]} />

//                   {/* Fourth row */}
//                   <Box imageUrl="l41.png" position={[-1.6, -1.6, 0]} />
//                   <Box imageUrl="l42.png" position={[-0.55, -1.6, 0.5]} />
//                   <Box imageUrl="h41.png" position={[0.55, -1.6, 0.2]} />
//                   <Box imageUrl="h42.png" position={[1.6, -1.6, 1]} />
                </group>
                </Canvas>
            </div>
          </div>
        )}
        <div className="parallax-overlay"></div>
      </div>
    </div>
  );
};

export default Parallax;