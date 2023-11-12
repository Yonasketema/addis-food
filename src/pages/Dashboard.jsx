import styled from "styled-components";

import Heading from "../components/Heading";
import Row from "../components/Row";
import AddFood from "../components/AddFood";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import Menu from "../components/Menu";
import { useRestaurant } from "../hooks/useRestaurant";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 0 12rem;
`;

function Dashboard() {
  const { userRestaurant } = useRestaurant();

  return (
    <>
      <Main>
        <Title>
          <h1>{userRestaurant?.restaurant?.restaurantName}</h1>
          <p>{userRestaurant?.restaurant?.description}</p>
          <ButtonGroup>
            <Button>Edit</Button>
          </ButtonGroup>
        </Title>
        <Row>
          <Heading as="h1">Menu</Heading>
          <AddFood />
        </Row>
        {userRestaurant?.restaurant?.id && (
          <Menu restaurant_id={userRestaurant?.restaurant?.id} />
        )}
      </Main>
    </>
  );
}

const Title = styled.div`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  margin-bottom: 3rem;
`;

export default Dashboard;
