import React from "react";

import { CardStyled } from "./styled";
import { SizeCard } from "./types";

type Props = {
  size?: SizeCard;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({ size = "sm", ...htmlAttributes }) => {
  return <CardStyled $size={size} {...htmlAttributes} />;
};
