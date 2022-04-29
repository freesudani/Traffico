import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Colors } from "../theme/Theme";
import Body3 from "../theme/Body3.styled";
import Body1 from "../theme/Body1.styled";

const QuestionSec = styled.div`
  width: 55rem;
  height: 25rem;
  border-radius: 1rem;
`;

const Q = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.Text.TextWhite};
  height: 36%;
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

const A = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff7f5;
  height: 16rem;
`;

const Atext = styled.div`
  margin-left: 3.5rem;
  max-width: 40rem;
`;

const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const displayAnswer = () => setShowAnswer(!showAnswer);

  return (
    <QuestionSec>
      <Q>
        <Qtext>
          <Body3>{props.question}</Body3>
        </Qtext>
        <Button onClick={displayAnswer}>
          {!showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </Button>
      </Q>
      {showAnswer && (
        <A>
          <Atext>
            <Body1>{props.answer}</Body1>
          </Atext>
        </A>
      )}
    </QuestionSec>
  );
};

export default Question;
