import React from "react";

import { InputLabelStyled, InputStyled, InputWrapper } from "./styled";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ label, ...htmlAttributes }) => {
  return (
    <InputWrapper>
      <InputLabelStyled>{label}</InputLabelStyled>
      <InputStyled {...htmlAttributes} />
    </InputWrapper>
  );
};
