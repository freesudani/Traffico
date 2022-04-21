import React from "react";
import styled from "styled-components";
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
    </AppSec>
  );
};

export default App;
