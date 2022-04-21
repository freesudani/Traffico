import React from "react";
import styled from "styled-components";
import Button from "../theme/Button.styled";
import H1 from "../theme/H1.styled";
import { Colors } from "../theme/Theme";
import Logo from "./Logo";
import Union from "../images/Union.png";
import TopBgImage from "../images/Scene.png";
import TruckImg from "../images/mobel.png";

const NavTop = styled.div`
  margin-left: 24rem;
  margin-top: 5rem;
  display: flex;
  justify-items: center;
`;

const TopSec = styled.div`
  width: 100vw;
  height: 120vh;
  background-image: url(${TopBgImage});
  background-repeat: no-repeat;
  background-size: 148rem 85rem;
  background-position-x: left;
  background-position-y: top;
`;

const TopLogo = styled.div`
  margin-left: 0rem;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 19.2rem;

  list-style: none;
`;

const NavElm = styled.li`
  margin-right: 9rem;
`;

const Heading = styled.div`
  height: 30rem;
  width: 74.1rem;
  margin-left: 24rem;
  margin-top: 7.5rem;
  color: ${Colors.Text.TextWhite};
`;

const StartedTop = styled.div`
  margin-left: 24rem;
  margin-top: 2rem;
`;

const TruckImage = styled.div`
  margin-top: 9.5rem;
`;

const Top = () => {
  return (
    <TopSec>
      <NavTop>
        <TopLogo>
          <Logo />
        </TopLogo>
        <Nav>
          <NavElm>
            <Button>ABOUT</Button>
          </NavElm>
          <NavElm>
            <Button>HOW TO</Button>
          </NavElm>
          <NavElm>
            <Button>FAQS</Button>
          </NavElm>
          <Button var="contained" size="sm">
            CONTACT US
          </Button>
        </Nav>
      </NavTop>
      <Heading>
        <H1>Your awesome traffic permit consultant.</H1>
      </Heading>
      <StartedTop>
        <Button var="contained" size="lg">
          GET STARTED
          <img src={Union} alt="arrow" style={{ marginLeft: "2rem" }} />
        </Button>
      </StartedTop>
      <TruckImage>
        <img src={TruckImg} alt="truck" />
      </TruckImage>
    </TopSec>
  );
};

export default Top;
