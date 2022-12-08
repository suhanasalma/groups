import React from 'react';
import { HiLocationMarker, HiPencil } from "react-icons/hi";
import { TfiHelpAlt } from "react-icons/tfi";



const RightSide = () => {
   return (
     <div>
       <div className="d-flex justify-content-between align-items-center  w-50 fw-bold">
         <p className=" d-flex justify-content-between align-items-center">
           <HiLocationMarker /> Nohida, India
         </p>
         <p>
           <HiPencil />
         </p>
       </div>

       <hr className="mt-0  w-50 " />
       <div className='d-flex gap-2 w-50 text-black-50'>
         <p className="">
           <TfiHelpAlt />
         </p>
         <p>
             Your location will help us serve better and extend a personalised
             experience.
         </p>
       </div>
     </div>
   );
};

export default RightSide;