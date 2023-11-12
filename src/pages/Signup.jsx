import React from "react";
import styled from "styled-components";

import SignupForm from "../components/SignupForm";
import Heading from "../components/Heading";

const SignupLayout = styled.main`
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

export default function Signup() {
  return (
    <SignupLayout>
      <Heading as="h4">Sign up</Heading>
      <SignupForm />
    </SignupLayout>
  );
}
