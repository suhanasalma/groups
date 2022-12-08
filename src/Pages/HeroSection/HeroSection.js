import React from 'react';
// import hero from '../../Assests/hero-logo'
import './HeroSection.css'

const HeroSection = () => {
   return (
     <div className="hero position-relative">
       <div className="text-white position-absolute top-50 start-12">
         <h1 className="fw-bold fs-1 computer">Computer Engineering</h1>
         <h5 className="fs-5 fw-normal">
           142,765 Computer Engineers follow this
         </h5>
       </div>
     </div>
   );
};

export default HeroSection;