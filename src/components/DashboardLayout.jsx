import { Outlet } from "react-router-dom";

import styled from "styled-components";
import MainNav from "./MainNav";
import LogoutButton from "./LogoutButton";

const Sidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.2rem;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  height: 87vh;
  overflow: auto;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Sidebar>
        <MainNav />
        <LogoutButton />
      </Sidebar>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
