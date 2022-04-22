import React from "react";
import styled from "styled-components";
import AboutBg from "../images/Illustration.png";
import Subtitle1 from "../theme/Subtitle1.styled";
import { Colors } from "../theme/Theme";
import Body1 from "../theme/Body1.styled";
import Body2 from "../theme/Body2.styled";

const AboutSec = styled.div`
  display: flex;
  justify-content: space-between;
  width: 117rem;
  height: 55rem;
  margin-top: 35.5rem;
`;

const AboutImage = styled.div``;

const AboutText = styled.div``;

const AboutHeading = styled.div`
  color: ${Colors.Brand.PrimaryMain};
  margin-top: 6rem;
`;

const AboutParag = styled.div`
  width: 47rem;
  margin-top: 4rem;
`;

const AboutHow = styled.div`
  width: 57rem;
  height: 16rem;
  padding: 3rem 5rem;
  margin-top: 7rem;
  background-color: ${Colors.Brand.BG};
  border-left: 1rem solid ${Colors.Brand.PrimaryMain};
`;

const AboutUs = () => {
  return (
    <AboutSec>
      <AboutText>
        <AboutHeading>
          <Subtitle1>ABOUT US</Subtitle1>
        </AboutHeading>
        <AboutParag>
          <Body1>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </Body1>
        </AboutParag>
        <AboutHow>
          <Body2>
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </Body2>
        </AboutHow>
      </AboutText>
      <AboutImage>
        <img src={AboutBg} alt="illustration" />
      </AboutImage>
    </AboutSec>
  );
};

export default AboutUs;
