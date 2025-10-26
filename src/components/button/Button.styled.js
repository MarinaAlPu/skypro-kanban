import styled from "styled-components";


const colors = {
  primary: "#565EEF",
  secondary: "#FFFFFF",
  tertiary: "#94A6BE",
};

export const SButton = styled.button`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background-color: ${({$type}) => colors[$type]};
  ${({$type}) => ($type === "secondary" ? "color: #565EEF" : "")}
`;

export const PrimaryButton = styled(SButton)`
  background-color: #565EEF;
`;

export const SecondaryButton = styled(SButton)`
  background-color: #FFFFFF;
  color: #565EEF;
  border: 0.7px solid #565EEF;
`;
