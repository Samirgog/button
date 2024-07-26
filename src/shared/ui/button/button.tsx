import React from "react";

import { ButtonStyled } from "./styled";
import { SizeButton, TypeButton } from "./types";

type Props = {
  type?: TypeButton;
  size: SizeButton;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  type = "main",
  size,
  disabled = false,
  ...htmlAttributes
}) => {
  return (
    <ButtonStyled
      $type={type}
      $disabled={disabled}
      $size={size}
      disabled={disabled}
      {...htmlAttributes}
    />
  );
};
