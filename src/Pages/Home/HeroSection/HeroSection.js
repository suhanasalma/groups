import React from 'react';
import hero from '../../../Assests/hero-logo/hero.jpg'
import './HeroSection.css'

const HeroSection = () => {
   return (
     //   <div className="">
     //     <div className='hero'>
     //       <img className="w-100 h-100 hero-img" src={hero} alt="" />
     //     </div>
     //     <div>
     //       <h1>Computer Engineering</h1>
     //       <p>142,765 Computer Engineers follow this</p>
     //     </div>
     //   </div>
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