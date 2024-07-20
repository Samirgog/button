import React from "react";

import { HiddenRadio, RadioButtonStyled, RadioButtonWrapper, RadioLabel } from "./styled";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio: React.FC<Props> = ({ label, checked, ...props }) => {
  return (
    <RadioButtonWrapper>
      <HiddenRadio />
      <RadioButtonStyled {...props} $checked={checked} />
      <RadioLabel>{label}</RadioLabel>
    </RadioButtonWrapper>
  );
};
