import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header/Header';
import HeroSection from '../Pages/HeroSection/HeroSection'
import Category from '../Pages/Category/Category';
import { Col, Container, Row } from "react-bootstrap";
import RightSide from '../Pages/RightSide/RightSide';


const Main = () => {
   return (
     <div>
       <Header />
       <HeroSection />
       <Category />
       <Container>
         <Row>
           <Col lg="7" className="">
             <Outlet></Outlet>
           </Col>
           <Col lg="5">
             <RightSide />
           </Col>
         </Row>
       </Container>
     </div>
   );
};

export default Main;