import styled, { css } from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

import LogoutButton from "./LogoutButton";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`;

const StyledLink = styled(Link)`
  color: yellowgreen;
  font-weight: bold;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover,
  &:active,
  &.active:link,
  &.active {
    color: yellowgreen;
  }

  ${(props) =>
    props.btn &&
    css`
      color: #fff;
      padding: 1.2rem 2.4rem;
      background-color: yellowgreen;
      box-shadow: var(--shadow-md);
      border-radius: 5px;
      text-transform: capitalize;

      &:hover,
      &:active,
      &.active:link,
      &.active:visited {
        color: white;
      }
    `}
`;

function Header({ user }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <StyledHeader>
      <Link to="/">
        <h3>Addis Foods </h3>
      </Link>

      {user ? (
        <Nav>
          {user.role === "admin" ? (
            <>
              <StyledNavLink to="/dashboard">My Menu</StyledNavLink>
            </>
          ) : (
            <StyledNavLink to="/create">Create Menu</StyledNavLink>
          )}

          {user.role === "user" && <LogoutButton />}
        </Nav>
      ) : (
        <Nav>
          {currentUrl === "/signup" ? (
            <p>
              Already have an account?
              <StyledLink to="/login">Login</StyledLink>
            </p>
          ) : (
            <>
              <StyledNavLink to="/how-it-work">How it Work</StyledNavLink>
              <StyledNavLink to="/login">Log in</StyledNavLink>
              <StyledNavLink to="/signup" btn>
                Sign up
              </StyledNavLink>
            </>
          )}
        </Nav>
      )}
    </StyledHeader>
  );
}

export default Header;
