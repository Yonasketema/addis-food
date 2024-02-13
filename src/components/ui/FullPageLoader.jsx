import React from "react";
import styled from "styled-components";
import Loader from "./Loader";
import Heading from "./Heading";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-00);
  text-align: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-green-700);
`;

function FullPageLoader({ title }) {
  return (
    <FullPage>
      <LoaderContainer>
        <Loader />
        <Heading>{title}</Heading>
      </LoaderContainer>
    </FullPage>
  );
}

export default FullPageLoader;
