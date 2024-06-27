import React from "react";
import { ColorTypography, TypeTypography, WeightTypography } from "./typography.types";
import { TypographyStyled } from "./typography.styled";

type Props = {
    type?: TypeTypography;
    weight?: WeightTypography;
    color?: ColorTypography;
    children: React.ReactElement;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Typography: React.FC<Props> = ({type = 'text', weight = 'regular', color = 'default', children, ...htmlAttributes}) => {
    return <TypographyStyled $type={type} $weight={weight} $color={color} {...htmlAttributes}>{children}</TypographyStyled> ;
}