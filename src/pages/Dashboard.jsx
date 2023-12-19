import styled from "styled-components";

import Heading from "../components/Heading";
import Row from "../components/Row";
import AddFood from "../components/AddFood";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import Menu from "../components/Menu";
import { useRestaurant } from "../hooks/useRestaurant";

const Title = styled.div`
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  margin-bottom: 1.2rem;
`;

function Dashboard() {
  const { userRestaurant } = useRestaurant();

  return (
    <>
      <Row>
        <div
          style={{
            display: "flex",
            fontSize: "1rem",
            gap: "1rem",
            backgroundColor: "#fff",
            padding: "1rem 1.2rem",
          }}
        >
          <img
            src="cabin-007.jpg"
            alt=""
            style={{
              width: "27rem",
            }}
          />
          <div>
            <h1>{userRestaurant?.restaurant?.restaurantName}</h1>
            <p>
              {userRestaurant?.restaurant?.description ||
                "Historia Regis Sarsa Dengel Malak Sagad. Accedit Historia Gentis Galla, Curante Guidi"}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "20vh",
            border: "1px solid #444",
          }}
        >
          map
        </div>
      </Row>
      <Row>
        <Heading as="h1">Menu</Heading>
        <AddFood />
      </Row>
      {userRestaurant?.restaurant?.id && (
        <Menu restaurant_id={userRestaurant?.restaurant?.id} />
      )}
    </>
  );
}

export default Dashboard;
