import React from "react";

import { InputStyled } from "./styled";

export const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = ({ ...htmlAttributes }) => {
  return <InputStyled {...htmlAttributes} />;
};
