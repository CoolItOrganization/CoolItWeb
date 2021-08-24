import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/InfoSection";
import Service from "../components/Service";

import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import RequestCard from "../components/RequestCard";
import PendingOrderTable from "../components/PendingOrderTable";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection/>
      <About/>
      {/* <H1>nivin</H1> */}
      <Service/>
      <ReviewSection/>
      <Footer/>
      <RequestCard/>
      <PendingOrderTable/>
    </>
  );
};

export default Home;
