import styled from "styled-components";

const StyledFoodCard = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 2rem 1rem;
  background-color: var(--color-grey-00);
  border: 1px solid #eee;
  margin: 0.1rem;

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

const Container = styled.div`
  width: 100%;
`;

const ImageBox = styled.div`
  height: 14rem;
  width: 28rem;
  border-radius: 7px;
`;

const P = styled.p`
  width: 55%;
  height: 10%;
  margin-bottom: 1rem;
`;

const Heading = styled.div`
  width: 70%;
  height: 12%;
  margin-bottom: 1rem;
`;

function FoodCard() {
  return (
    <>
      <StyledFoodCard>
        <ImageBox className="skeleton" />
        <Container>
          <Heading className="skeleton"></Heading>
          <P className="skeleton"></P>
          <P className="skeleton"></P>
        </Container>
      </StyledFoodCard>
    </>
  );
}

export default FoodCard;
