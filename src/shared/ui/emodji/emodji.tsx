import React from "react";

import { MAP_NAMES_EMODJI } from "./consts";
import { EmodjiStyled } from "./styled";
import { EmodjiName } from "./types";

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
