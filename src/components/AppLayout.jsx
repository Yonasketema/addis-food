import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { useUser } from "../hooks/useUser";
import Loader from "./ui/Loader";
import Heading from "./ui/Heading";
import Header from "./Header";

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

function AppLayout({ children }) {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return (
      <FullPage>
        <LoaderContainer>
          <Loader />
          <Heading>Addis Food </Heading>
        </LoaderContainer>
      </FullPage>
    );
  }

  return (
    <BrowserRouter>
      <Header user={user} />
      {children}
    </BrowserRouter>
  );
}

export default AppLayout;
