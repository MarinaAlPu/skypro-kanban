import { SButton, PrimaryButton, SecondaryButton } from "./Button.styled";


export const Button = ({ text, type = "primary", disabled = false }) => {
  if (type === "primary") return <PrimaryButton>{text}</PrimaryButton>;
  if (type === "secondary") return <SecondaryButton>{text}</SecondaryButton>;

  return (
    <SButton $type={type} disabled={disabled}>{text}</SButton>
  )
};
