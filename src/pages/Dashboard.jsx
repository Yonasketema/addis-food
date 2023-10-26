import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Row from "../components/Row";
import AddFood from "../components/AddFood";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import RowCard from "../components/RowCard";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 0 12rem;
`;

function Dashboard() {
  const { data: menu } = useQuery({
    queryKey: ["Menu"],
    queryFn: () =>
      fetch(
        "http://localhost:8000/api/v1/food/restaurantfoods?restaurant=63b670347f5d4be30274c830"
      ).then((res) => res.json()),
  });

  return (
    <>
      <Header />
      <Main>
        <Title>
          <h1>Habesha hotel</h1>
          <p>
            Thanks for taking the time to contribute! Contributions make the
            open-source community a fantastic place to learn ...
          </p>
          <ButtonGroup>
            <Button>Edit</Button>
          </ButtonGroup>
        </Title>
        <Row>
          <Heading as="h1">Menu</Heading>
          <AddFood />
        </Row>
        {menu?.foods.map((food) => (
          <RowCard name={food.name} />
        ))}
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
