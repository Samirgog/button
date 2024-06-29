import React from "react";
import { DirectionStack } from "./types";
import { StackStyled } from "./styled";

type Props = {
    direction?: DirectionStack;
    gap?: number; 
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<Props> = ({direction = 'row', gap = 0, children, ...htmlAttributes}) => {
    return <StackStyled $direction={direction} $gap={gap}>{children}</StackStyled>
}