import React from "react";

import { ButtonStyled } from "./styled";
import { SizeButton, TypeButton } from "./types";

type Props = {
  type: TypeButton;
  size: SizeButton;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ type, size, disabled = false, ...htmlAttributes }) => {
  return (
    <ButtonStyled
      $disabled={disabled}
      $type={type}
      $size={size}
      disabled={disabled}
      {...htmlAttributes}
    />
  );
};
