import React, { useContext } from 'react';
// import hero from '../../Assests/hero-logo'
import './HeroSection.css'
import { HiUserGroup } from "react-icons/hi";
import { SharedContext } from '../../AuthContext/AuthContext';


const HeroSection = () => {
  const { user } = useContext(SharedContext);

   return (
     <div className="hero position-relative w-100">
       <div className="text-white position-absolute top-50 start-12">
         <h1 className="fw-bold fs-1 computer">Computer Engineering</h1>
         <h5 className="fs-5 fw-normal">
           142,765 Computer Engineers follow this
         </h5>
       </div>
       <div>
         <div className="position-absolute top-0 end-0 p-5 sm-d-block d-lg-none">
           {user?.uid ? (
             <button className="border p-2 fs-6 d-flex align-items-center gap-2 ">
               <HiUserGroup /> Leave Group
             </button>
           ) : (
             <button className="border bg-darkBlue border-0 text-white p-2 fs-6 d-flex align-items-center gap-2">
               <HiUserGroup /> Join Group
             </button>
           )}
         </div>
       </div>
     </div>
   );
};

export default HeroSection;