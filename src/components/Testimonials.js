import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Subtitle1 from "../theme/Subtitle1.styled";
import H2 from "../theme/H2.styled";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Review from "../components/Review";
import { customertesti } from "../data/CustomerTesti";

const TestiSec = styled.div`
  position: relative;
  margin-top: 17.7rem;
  width: 168rem;
  height: 45.4rem;
  margin-left: 24rem;
  overflow-x: hidden;
`;

const Top = styled.div`
  padding-top: -4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutHeading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${Colors.Brand.PrimaryMain};
`;

const Button = styled.button`
  color: ${Colors.Brand.PrimaryMain};
  border: none;
  background-color: transparent;
  margin-top: 0.8rem;

  &:hover {
    color: ${Colors.Brand.PrimaryDark};
  }
`;

const ButtongGroup = styled.div`
  margin-left: 86.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.Brand.PrimaryMain};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`;

const Title = styled.div`
  width: 30rem;
  margin-top: 4rem;
  text-align: left;
`;

const Reviews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 42rem);
  grid-column-gap: 20px;
`;

const Testimonials = () => {
  return (
    <TestiSec>
      <Top>
        <AboutHeading>
          <Subtitle1>ABOUT US</Subtitle1>
        </AboutHeading>
        <ButtongGroup>
          <Button>
            <HiOutlineArrowNarrowLeft style={{ fontSize: "3rem" }} />
          </Button>
          <Button>
            <HiOutlineArrowNarrowRight style={{ fontSize: "3rem" }} />
          </Button>
        </ButtongGroup>
      </Top>
      <Bottom>
        <Title>
          <H2>Out Awesome Clients</H2>
        </Title>
        <Reviews>
          {customertesti.map((testi, index) => (
            <Review
              key={index}
              parag={testi.qoute}
              picture={testi.picture}
              title={testi.customer}
            />
          ))}
        </Reviews>
      </Bottom>
    </TestiSec>
  );
};

export default Testimonials;
