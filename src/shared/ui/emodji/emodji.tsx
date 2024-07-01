import React from "react";
import { EmodjiName } from "./types";
import { MAP_NAMES_EMODJI } from "./consts";
import { EmodjiStyled } from "./styled";

type Props = {
  emodjiName?: EmodjiName;
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Emodji: React.FC<Props> = ({
  size = 16,
  emodjiName = EmodjiName.BREAD,
  children,
  ...htmlAttributes
}) => {
  return (
    <EmodjiStyled $size={size} {...htmlAttributes}>
      {children ?? MAP_NAMES_EMODJI[emodjiName]}
    </EmodjiStyled>
  );
};
