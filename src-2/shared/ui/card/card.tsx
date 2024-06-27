import React from "react";
import { SizeCard } from "./card.types";
import { CardStyled } from "./card.styled";

type Props = {
    size?: SizeCard;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({size = 'sm', ...htmlAttributes}) => {
    return <CardStyled $size={size} {...htmlAttributes} />
};