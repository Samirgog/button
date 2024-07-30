import React from "react";

import { SlideInWrapperStyled } from "./styled";
import { DirectionSlideIn } from "./types";

type Props = {
  direction?: DirectionSlideIn;
} & React.HTMLAttributes<HTMLDivElement>;

export const SlideInWrapper: React.FC<Props> = ({ direction = "ltr", children }) => {
  return <SlideInWrapperStyled $direction={direction}>{children}</SlideInWrapperStyled>;
};
