import React from "react";
import styled from "styled-components";
import Row from "./Row";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

const Image = styled.img`
  width: auto;
  height: inherit;
`;

const StyledRowCard = styled.div`
  display: flex;
  gap: 0.8rem;
  height: 14rem;
  width: 75%;
  border: 1px solid #ddd;
  margin-top: 3rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 0.8rem;
`;

function RowCard() {
  return (
    <StyledRowCard>
      <Image src="img-6.jpg" />
      <Container>
        <div>
          <h1>Shiro</h1>
          <p>Shiro, karia, timatim</p>
        </div>
        <Row>
          <span>$200.0</span>

          <ButtonGroup>
            <Button>Edit</Button>
            <Button variation="danger">Delete</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </StyledRowCard>
  );
}

export default RowCard;
