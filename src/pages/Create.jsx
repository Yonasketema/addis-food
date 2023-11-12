import React from "react";
import styled from "styled-components";

import CreatePlaceForm from "../components/CreatePlaceForm";

const CreateLayout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Create() {
  return (
    <CreateLayout>
      <CreatePlaceForm />
    </CreateLayout>
  );
}

export default Create;
