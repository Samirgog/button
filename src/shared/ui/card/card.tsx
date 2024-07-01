import React from "react";
import { SizeCard } from "./types";
import { CardStyled } from "./styled";

type Props = {
  size?: SizeCard;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({ size = "sm", ...htmlAttributes }) => {
  return <CardStyled $size={size} {...htmlAttributes} />;
};
