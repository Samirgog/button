import React from "react";
import { ColorTypography, TypeTypography, WeightTypography } from "./types";
import { TypographyStyled } from "./styled";

type Props = {
    type?: TypeTypography;
    weight?: WeightTypography;
    color?: ColorTypography;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Typography: React.FC<Props> = ({type = 'text', weight = 'regular', color = 'default', children, ...htmlAttributes}) => {
    return <TypographyStyled $type={type} $weight={weight} $color={color} {...htmlAttributes}>{children}</TypographyStyled> ;
}