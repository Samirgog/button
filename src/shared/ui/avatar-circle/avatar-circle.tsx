import React from "react";

import { AvatarCircleStyled } from "./styled";

export const AvatarCircle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...htmlAttributes
}) => {
  return <AvatarCircleStyled {...htmlAttributes}>{children}</AvatarCircleStyled>;
};
