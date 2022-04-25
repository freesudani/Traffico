import React from "react";
import styled from "styled-components";
import TruckImg from "../images/Group 35.png";
import { Colors } from "../theme/Theme";
import Button from "../theme/Button.styled";
import Union from "../images/Union.png";
import Body5 from "../theme/Body5.styled";
import MaskGroup from "../images/BG.png";
import Body6 from "../theme/Body6.styled";
import Logo from "./LogoFooter";
import { FaceBook, Twitter, Instagram } from "./SocialMedia";

const FooterSec = styled.div`
  position: relative;
  margin: 16.8rem 20rem 9.2rem 0rem;
  height: 92rem;
  width: 140rem;
  background-image: url(${MaskGroup});
  background-repeat: no-repeat;
  background-size: 140rem 66rem;
  background-position-y: 18.7rem;
`;

const TruckImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const FooterForm = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 44rem;
  width: 55rem;
  left: 71.5rem;
  top: 6rem;
  border-radius: 1rem;
  background-color: transparent;
`;

const Input = styled.input`
  max-width: 36rem;
  height: 5rem;
  margin-top: 1rem;
  text-align: 30%;
  padding-left: 4rem;
`;

const Label = styled.label`
  color: #402b2b;
`;

const Provide = styled.div`
  width: 33rem;
  height: 14rem;
  margin-top: 30rem;
  margin-left: 29rem;
  color: ${Colors.Text.TextWhite};
`;

const Rectangular = styled.div`
  position: absolute;
  border-left: 1rem solid ${Colors.Brand.PrimaryMain};
  height: 16rem;
  left: 25rem;
  top: 28rem;
  border-radius: 1rem;
`;

const NavFooter = styled.div`
  margin-left: 24rem;
  margin-top: 25rem;
  display: flex;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 40.2rem;
  list-style: none;
`;

const NavElm = styled.li`
  margin-right: 9rem;
`;

const FooterLogo = styled.div`
  width: 17rem;
  height: 4.1rem;
`;

const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17rem;
`;

const CopyRight = styled.div`
  margin-left: 24rem;
`;

const Social = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 15rem;
  list-style: none;
`;

const SocialElm = styled.li`
  margin-right: 3rem;
`;

const Footer = () => {
  return (
    <FooterSec>
      <TruckImage>
        <img src={TruckImg} alt="truck" />
      </TruckImage>
      <FooterForm>
        <Label htmlFor="name">
          <Body5>Name</Body5>
        </Label>
        <Input id="name" type="text" placeholder="Your Name" />
        <Label htmlFor="email">
          <Body5>Email Address</Body5>
        </Label>
        <Input id="email" type="email" placeholder="Your Email Address" />
        <Button var="contained" size="lg" style={{ marginTop: "3rem" }}>
          GET STARTED
          <img src={Union} alt="arrow" style={{ marginLeft: "2rem" }} />
        </Button>
      </FooterForm>
      <Provide>
        <Body6>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </Body6>
      </Provide>
      <Rectangular />
      <NavFooter>
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <Nav>
          <NavElm>
            <Button style={{ fontWeight: 400 }}>ABOUT</Button>
          </NavElm>
          <NavElm>
            <Button style={{ fontWeight: 400 }}>HOW TO</Button>
          </NavElm>
          <NavElm>
            <Button style={{ fontWeight: 400 }}>FAQS</Button>
          </NavElm>
        </Nav>
      </NavFooter>
      <BottomFooter>
        <CopyRight>
          <Body5>Copyright @ 2019</Body5>
        </CopyRight>
        <Social>
          <SocialElm>
            <FaceBook />
          </SocialElm>
          <SocialElm>
            <Twitter />
          </SocialElm>
          <SocialElm>
            <Instagram />
          </SocialElm>
        </Social>
      </BottomFooter>
    </FooterSec>
  );
};

export default Footer;
