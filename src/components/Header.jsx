import styled from "styled-components";
import { Link } from "react-router-dom";

import Row from "./Row";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/authApi";
import { deleteLocalStorage } from "../utils/LocalSorage";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-50);
    background-color: var(--color-yellow-700);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-yellow-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function Header() {
  const { data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return (
    <StyledHeader>
      <Row>
        <Link to="/">
          <h3>Addis Foods </h3>
        </Link>

        {currentUser ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <StyledLink to="/dashboard">My Menu</StyledLink>
            <StyledLink to="/create">Create Menu</StyledLink>
            <StyledLink onClick={() => deleteLocalStorage("addis-auth-token")}>
              Log out
            </StyledLink>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <StyledLink to="/signup">Get started</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </div>
        )}
      </Row>
    </StyledHeader>
  );
}

export default Header;
