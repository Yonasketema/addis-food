import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Row from "./Row";

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/authApi";
import LogoutButton from "./LogoutButton";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 13vh;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    text-transform: uppercase;
    color: var(--color-grey-500);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: yellowgreen;
  }
`;

function Header() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return (
    <StyledHeader>
      <Row>
        <Link to="/">
          <h3>Addis Foods </h3>
        </Link>

        {user ? (
          <header
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {user.role === "admin" ? (
              <>
                <StyledLink to="/dashboard">My Menu</StyledLink>
              </>
            ) : (
              <StyledLink to="/create">Create Menu</StyledLink>
            )}

            {user.role === "user" && <LogoutButton />}
          </header>
        ) : (
          <header
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <StyledLink to="/how-it-work">How it Work</StyledLink>
            <StyledLink to="/signup">Get started</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <p>
              Already have an account?{" "}
              <u
                style={{
                  color: "greenyellow",
                }}
              >
                Login
              </u>
            </p>
          </header>
        )}
      </Row>
    </StyledHeader>
  );
}

export default Header;
