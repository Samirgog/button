import React from "react";
import { AlignStack, DirectionStack, JustifyStack } from "./types";
import { StackStyled } from "./styled";

type Props = {
  direction?: DirectionStack;
  align?: AlignStack;
  justify?: JustifyStack;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<Props> = ({
  direction = "row",
  align = "flex-start",
  justify = "normal",
  gap = 0,
  children,
  ...htmlAttributes
}) => {
  return (
    <StackStyled
      $direction={direction}
      $align={align}
      $justify={justify}
      $gap={gap}
      {...htmlAttributes}
    >
      {children}
    </StackStyled>
  );
};
