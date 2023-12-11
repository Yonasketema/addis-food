import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Row from "./Row";

import { deleteLocalStorage } from "../utils/LocalSorage";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
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

function Header({ user }) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Row>
        <Link to="/">
          <h3>Addis Foods </h3>
        </Link>

        {user ? (
          <div
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

            <StyledLink
              to=".."
              onClick={() => {
                navigate("/");
                deleteLocalStorage("addis-auth-token");
              }}
            >
              Log out
            </StyledLink>
          </div>
        ) : (
          <div
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
          </div>
        )}
      </Row>
    </StyledHeader>
  );
}

export default Header;
