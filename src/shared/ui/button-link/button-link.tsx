import React from "react";

import { ButtonStyled } from "./styled";
import { SizeButton, TypeButton } from "./types";

type Props = {
  type?: TypeButton;
  size: SizeButton;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink: React.FC<Props> = ({ type = "main", size, ...htmlAttributes }) => {
  return <ButtonStyled $type={type} $size={size} {...htmlAttributes} />;
};
