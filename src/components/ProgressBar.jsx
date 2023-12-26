import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #dee2e6;
  height: 1rem;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: #43aa8b;
  height: 1rem;
  border-radius: 20px;
  width: ${(props) => props.width}%;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: #8d99ae;
`;

const StyledProgressBar = styled.div`
  margin: 1.2rem auto;
  width: 80%;
`;

const ProgressBar = ({ step, numberOfStep }) => {
  const percent = (step * 100) / numberOfStep;

  return (
    <StyledProgressBar>
      <Text>
        {step} of {numberOfStep} completed
      </Text>
      <Background>
        <Progress width={percent} />
      </Background>
    </StyledProgressBar>
  );
};

export default ProgressBar;
