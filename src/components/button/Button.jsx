import { SButton, PrimaryButton, SecondaryButton } from "./Button.styled";


export const Button = ({ text, type = "primary", width="248px", disabled = false }) => {
  if (type === "primary") return <PrimaryButton width={width}>{text}</PrimaryButton>;
  if (type === "secondary") return <SecondaryButton width={width}>{text}</SecondaryButton>;

  return (
    <SButton $type={type} width={width} disabled={disabled}>{text}</SButton>
  )
};
