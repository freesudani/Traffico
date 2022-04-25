import React from "react";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowToApply from "./components/HowToApply";
import Testimonials from "./components/Testimonials";
import Top from "./components/Top";

const AppSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppSec>
      <Top />
      <AboutUs />
      <HowToApply />
      <FAQ />
      <Testimonials />
      <Footer />
    </AppSec>
  );
};

export default App;
