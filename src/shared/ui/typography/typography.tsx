import React from "react";

import { TypographyStyled } from "./styled";
import { ColorTypography, TypeTypography, WeightTypography } from "./types";

type Props = {
  type?: TypeTypography;
  weight?: WeightTypography;
  color?: ColorTypography;
  lineClamp?: number;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Typography: React.FC<Props> = ({
  type = "text",
  weight = "regular",
  color = "default",
  lineClamp,
  children,
  ...htmlAttributes
}) => {
  return (
    <TypographyStyled
      $type={type}
      $weight={weight}
      $color={color}
      $lineClamp={lineClamp}
      {...htmlAttributes}
    >
      {children}
    </TypographyStyled>
  );
};