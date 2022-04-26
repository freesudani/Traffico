import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Body5 from "../theme/Body5.styled";
import Body4 from "../theme/Body4.styled";

const RevSec = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  height: 36rem;
  width: 42rem;
  padding: 6rem 5.2rem 4rem 4.8rem;
  background-color: ${Colors.Text.TextWhite};
  border-radius: 1rem;
`;

const RevText = styled.div`
  margin-top: 6rem;
  width: 32rem;
`;

const RevPerson = styled.div`
  display: flex;
  justify-content: left;
  align-items: end;

  width: 24rem;
  height: 6rem;
`;

const RevPicture = styled.div``;

const RevTitle = styled.div`
  margin-left: 2rem;
`;

const Review = (props) => {
  return (
    <RevSec>
      <RevText>
        <Body5>{props.parag}</Body5>
      </RevText>
      <RevPerson>
        <RevPicture>
          <img src={props.picture} alt={props.title} />
        </RevPicture>
        <RevTitle>
          <Body4>{props.title}</Body4>
        </RevTitle>
      </RevPerson>
    </RevSec>
  );
};

export default Review;
