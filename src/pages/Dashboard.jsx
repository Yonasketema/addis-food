import React from "react";
import styled from "styled-components";

import RowCard from "../components/RowCard";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Row from "../components/Row";
import Button from "../components/Button";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 0 12rem;
`;

function Dashboard() {
  return (
    <>
      <Header />
      <Main>
        <Row>
          <Heading as="h1">Menu</Heading>
          <Button>Add</Button>
        </Row>
        <RowCard />
      </Main>
    </>
  );
}

export default Dashboard;
