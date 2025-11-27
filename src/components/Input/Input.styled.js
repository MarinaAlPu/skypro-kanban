import styled from "styled-components";


// const borderColors = {
//   standart: "rgba(148, 166, 190, 0.4)",
//   // error: "#F84D4D",
//   error: "rgba(248, 77, 77, 1)",
// };

export const SInput = styled.input`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  /* border: 0.7px solid rgba(148, 166, 190, 0.4); */
  border: 0.7px solid ${({ $error }) => ($error ? 'rgba(248, 77, 77, 1)' : 'rgba(148, 166, 190, 0.4)')};
  border-radius: 8px;
  &:hover {
    outline: none;
    border-color: rgba(86, 94, 239, 0.8);
    /* box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2); */
  }
  &:focus {
    outline: none;
    border-color: rgba(86, 94, 239, 0.8);
    box-shadow: 0 0 0 3px rgba(86, 94, 239, 0.2);
  }
  &::placeholder {
    color: rgba(148, 166, 190, 1);
    font-size: 14px;
  }
`