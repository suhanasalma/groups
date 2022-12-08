import React, { useContext, useState } from 'react';
import { HiLocationMarker, HiPencil } from "react-icons/hi";
import { TfiHelpAlt } from "react-icons/tfi";
import { SharedContext } from '../../AuthContext/AuthContext';



const RightSide = () => {
  const {user} = useContext(SharedContext)


  const groups = [
    {
      id: 1,
      img: "https://i0.wp.com/www.iedunote.com/img/28051/reference-groups.jpg?fit=1920%2C1280&amp;quality=100&amp;ssl=1",
      name: "Leisure",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPANdhL_8H_Mr8x7p2AePO7kJ5EtTm4Xl4A&usqp=CAU",
      name: "Activism",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrqu5nrW2y3dowiLQjUn3dOzSoTtfmTb_oA&usqp=CAU",
      name: "MBA",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOGV-Gi413eXHGNp7LPMldWZ0zcneAi94Tg&usqp=CAU",
      name: "Philosophy",
    },
  ];
   return (
     <div className='d-xxs-none d-xl-block'>
       {user?.uid ? (
         <div>
           <div className="d-flex justify-content-between align-items-center  w-50 fw-bold">
             <p className=" d-flex justify-content-between align-items-center">
               <HiLocationMarker /> Enter your location
             </p>
             <p>
               <HiPencil />
             </p>
           </div>
           <hr className="mt-0  w-50 " />
           <div>
             <p>Recomanded Group</p>
             <div>
               {groups.map((group) => (
                 <div key={group.id} className="d-flex justify-content-between align-items-center w-50">
                   <img className="userImg" src={group.img} alt="" />
                   <p>{group.name}</p>
                   <button
                     className="border-0 bg-gray rounded-pill px-3 py-1"
                   >
                     Follow
                   </button>
                 </div>
               ))}
             </div>
           </div>
         </div>
       ) : (
         <>
           <div className="d-flex justify-content-between align-items-center  w-50 fw-bold">
             <p className=" d-flex justify-content-between align-items-center">
               <HiLocationMarker /> Nohida, India
             </p>
             <p>
               <HiPencil />
             </p>
           </div>
           <hr className="mt-0  w-50 " />
           <div className="d-flex gap-2 w-50 text-black-50">
             <p className="">
               <TfiHelpAlt />
             </p>
             <p>
               Your location will help us serve better and extend a personalised
               experience.
             </p>
           </div>
         </>
       )}
       <p className="text-end w-50 text-darkBlue">see more ...</p>
     </div>
   );
};

export default RightSide;