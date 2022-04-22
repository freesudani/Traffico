import React from "react";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import HowToApply from "./components/HowToApply";
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
    </AppSec>
  );
};

export default App;
