import React from "react";
import styled from "styled-components";
import FAQBGImage from "../images/Rectangle 9.png";
import ThinkingImage from "../images/Group 14.png";
import Subtitle1 from "../theme/Subtitle1.styled";
import { Colors } from "../theme/Theme";
import H2 from "../theme/H2.styled";
import Question from "../components/Question";
import { data } from "../data/Questions";
import Body3 from "../theme/Body3.styled";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQSec = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 12rem;
  margin-left: 24rem;
  margin-right: 0rem;
  background-image: url(${FAQBGImage});
  background-repeat: no-repeat;
  background-size: 117rem 150rem;
  background-position-x: right;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FAQText = styled.div`
  width: 55rem;
  height: 29.4rem;
`;

const FAQHeader = styled.div`
  color: ${Colors.Brand.PrimaryMain};
  margin-top: 6rem;
`;
const ThinkingDetails = styled.div`
  margin-top: 4.4rem;
`;

const ThinkingImageBox = styled.div`
  margin-top: 10.1rem;
  margin-right: 17.7rem;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1em;
  max-width: 112rem;
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55rem;
  height: 9rem;
  background: rgba(237, 77, 71, 0.2);
  border-radius: 1rem;
  grid-column: 2 / -1;
`;

const LoadMoreText = styled.div`
  margin-left: 40%;
  color: ${Colors.Brand.PrimaryMain};
`;

const LoadMoreButton = styled.button`
  color: ${Colors.Brand.PrimaryMain};
  background-color: transparent;
  border: none;
  font-size: 2rem;
  margin-right: 3.5rem;
`;

const FAQ = () => {
  return (
    <FAQSec>
      <Top>
        <FAQText>
          <FAQHeader>
            <Subtitle1>FAQ</Subtitle1>
          </FAQHeader>
          <ThinkingDetails>
            <H2>Questions and Answers on Professional Traffic Permits:</H2>
          </ThinkingDetails>
        </FAQText>
        <ThinkingImageBox>
          <img src={ThinkingImage} alt="thinking" />
        </ThinkingImageBox>
      </Top>
      <Bottom>
        {data.map((article, i) => {
          return (
            <Question
              key={i}
              question={article.question}
              answer={article.answer}
            />
          );
        })}
        <LoadMore>
          <LoadMoreText>
            <Body3>LOAD MORE</Body3>
          </LoadMoreText>
          <LoadMoreButton>
            <AiOutlinePlus />
          </LoadMoreButton>
        </LoadMore>
      </Bottom>
    </FAQSec>
  );
};

export default FAQ;
