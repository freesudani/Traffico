import React from "react";
import styled from "styled-components";
import HowToBg from "../images/illustrations.png";
import { Colors } from "../theme/Theme";
import Subtitle1 from "../theme/Subtitle1.styled";
import Body1 from "../theme/Body1.styled";

const HowToSec = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130rem;
  height: 55rem;
  margin-top: 17rem;
`;

const HowToImage = styled.div`
  text-align: left;
`;

const HowToText = styled.div``;

const HowToHeading = styled.div`
  color: ${Colors.Brand.PrimaryMain};
  margin-top: 11.5rem;
`;

const HowToParag = styled.div`
  width: 45.5rem;
  margin-top: 4rem;
`;

const HowToApply = () => {
  return (
    <HowToSec>
      <HowToImage>
        <img src={HowToBg} alt="Illustration" />
      </HowToImage>
      <HowToText>
        <HowToHeading>
          <Subtitle1>HOW TO APPLY</Subtitle1>
        </HowToHeading>
        <HowToParag>
          <Body1>
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company's
            company signer or CEO.
          </Body1>
        </HowToParag>
      </HowToText>
    </HowToSec>
  );
};

export default HowToApply;
