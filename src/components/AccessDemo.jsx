import React from "react";
import styled from "styled-components";

import { useSearchParams } from "react-router-dom";

const demoLocation = { lat: 9.670370552912647, lng: 39.52696323394776 };

const StyledAccessDemo = styled.div`
  text-align: center;
  margin-top: 7%;

  & > p > u {
    cursor: pointer;
    color: #0073ff;
    font-size: large;
    margin-left: 1%;
  }
`;

function AccessDemo() {
  const [, setSearchParams] = useSearchParams();

  return (
    <StyledAccessDemo>
      <p>
        try this
        <u onClick={() => setSearchParams(demoLocation)}>click</u>
      </p>
    </StyledAccessDemo>
  );
}

export default AccessDemo;
