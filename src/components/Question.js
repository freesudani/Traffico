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
  background-color: ${Colors.Text.TextWhite};
  border-radius: 1rem;
`;

const Qtext = styled.div`
  margin-left: 3.5rem;
  max-width: 40rem;
`;

const Button = styled.button`
  color: ${Colors.Brand.PrimaryMain};
  background-color: transparent;
  border: none;
  font-size: 2rem;

  margin-right: 3.5rem;
`;

const Question = (props) => {
  return (
    <QuestionSec>
      <Qtext>
        <Body3>{props.question}</Body3>
      </Qtext>
      <Button>
        <AiOutlinePlus />
      </Button>
    </QuestionSec>
  );
};

export default Question;
