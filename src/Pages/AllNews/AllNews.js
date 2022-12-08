import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import './allnews.css'
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
     category
   } = news;
   console.log(category)
   return (
     <div className="">
       <Card style={{ width: "40rem" }} className="mb-3">
         {articleImg ? (
           <Card.Img className="card-img" variant="top" src={articleImg} />
         ) : (
           ""
         )}
         <Card.Body>
           <Card.Text className="fw-bold">{type}</Card.Text>
           <Card.Title>{name}</Card.Title>
           {desc ? (
             <Card.Text>{desc}</Card.Text>
           ) : (
             <Card.Text>
               <div className="d-flex gap-5 align-items-center">
                 {date ? <p>{date}</p> : <p>{companyName}</p>}
                 <p>{address}</p>
               </div>
             </Card.Text>
           )}

           {category === "3" && (
             <button className="border w-100 rounded mb-3">
               Visit Website
             </button>
           )}
           {category === "5" && (
             <button className="border w-100 rounded mb-3">
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