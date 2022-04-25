import React from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Colors } from "../theme/Theme";
import Body3 from "../theme/Body3.styled";

const QuestionSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55rem;
  height: 9rem;
  padding: auto 3.5rem;
  background-color: ${Colors.Text.TextWhite};
  border-radius: 1rem;
`;

const Button = styled.button`
  color: ${Colors.Brand.PrimaryMain};
  width: 2rem;
  height: 2rem;
`;

const Question = (props) => {
  return (
    <QuestionSec>
      <Body3>{props.question}</Body3>
      <Button>
        <AiOutlinePlus />
      </Button>
    </QuestionSec>
  );
};

export default Question;
