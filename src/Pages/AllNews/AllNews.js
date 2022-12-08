import React from 'react';
import {
  FaEye,
  FaShareAlt,
  FaRegCalendarAlt,
  FaMicroscope,
  FaNewspaper,
} from "react-icons/fa";
import Image from "react-bootstrap/Image";
import './allnews.css'
import { HiOutlineDotsHorizontal, HiShoppingBag } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import { FcCalendar } from "react-icons/fc";
import { TfiBag, TfiLocationPin } from "react-icons/tfi";



import Card from "react-bootstrap/Card";



const AllNews = ({news}) => {
   const {
     type,
     name,
     desc,
     writter,
     articleImg,
     view,
     writerImg,
     date,
     address,
     companyName,
     category,
   } = news;
  //  console.log(category)

  
   return (
     <div className="">
       <Card style={{ width: "40rem" }} className="mb-3">
         {articleImg ? (
           <Card.Img className="card-img" variant="top" src={articleImg} />
         ) : (
           ""
         )}
         <Card.Body>
           <Card.Text className="fw-bold fs-5 d-flex gap-2 align-items-center">
             {category === "5" && (
               <HiShoppingBag className="fs-4 text-darkBlue" />
             )}
             {category === "3" && <FcCalendar className="fs-4 " />}
             {category === "4" && (
               <FaMicroscope className="fs-4 text-deep-pink" />
             )}
             {category === "2" && (
               <FaNewspaper className="fs-4 text-deep-purple" />
             )}
             {type}
           </Card.Text>
           <div className="d-flex justify-content-between align-items-center">
             <Card.Title>{name}</Card.Title>

             <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                 <HiOutlineDotsHorizontal />
               </Dropdown.Toggle>

               <Dropdown.Menu className="border-0 shadow-lg">
                 <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
           </div>
           {desc ? (
             <Card.Text>{desc}</Card.Text>
           ) : (
             <Card.Text>
               <div className="d-flex gap-5 align-items-center fw-bold">
                 {date ? (
                   <p>
                     <FaRegCalendarAlt />
                     <span className="ms-1">{date}</span>
                   </p>
                 ) : (
                   <p>
                     <TfiBag />
                     <span className="ms-1">{companyName}</span>
                   </p>
                 )}
                 <p>
                   <TfiLocationPin /> <span className="ms-1">{address}</span>{" "}
                 </p>
               </div>
             </Card.Text>
           )}

           {category === "3" && (
             <button className="border bg-transparent text-deep-pink fw-bold w-100 rounded mb-3 p-2">
               Visit Website
             </button>
           )}
           {category === "5" && (
             <button className="bg-transparent text-deep-green fw-bold border w-100 rounded mb-3 p-2">
               Apply on Timesjobs
             </button>
           )}

           <div className="d-flex justify-content-between align-items-center ">
             <div className="d-flex gap-2 justify-content-between align-items-center">
               <Image
                 roundedCircle
                 src={writerImg}
                 style={{ height: "40px", width: "40px" }}
               ></Image>
               <Card.Text className="fw-bold fs-6">{writter}</Card.Text>
             </div>
             <div className="d-flex gap-3 justify-content-between align-items-center">
               <div className="text-black-50 fw-bold">
                 <FaEye className="me-2"></FaEye>
                 <span>{view} views</span>
               </div>
               <div className="bg-gray px-2 py-1">
                 <FaShareAlt className=""></FaShareAlt>
               </div>
             </div>
           </div>
         </Card.Body>
       </Card>
     </div>
   );
};

export default AllNews;