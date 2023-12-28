import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
     ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      width: 80rem;

      gap: 1.2rem;
      justify-content: stretch;
      align-content: stretch;
    `}
     
    
  overflow: hidden;
  font-size: 1.4rem;
`;
Form.defaultProps = {
  type: "regular",
};

export default Form;
