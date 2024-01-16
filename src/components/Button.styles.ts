/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "yellow",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 0px;
  margin: 8px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${(props) => {
    return css`background-color: ${buttonVariants[props.variant]}`;
  }} */
`;
