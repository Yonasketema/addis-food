import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  /* https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje */

  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#a5cab2 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;
  animation: loading 1s infinite linear;

  @keyframes loading {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;

function Loader() {
  return <StyledLoader />;
}

export default Loader;
