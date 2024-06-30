import React from "react";
import { LinkStyled } from "./styled";

export const Link: React.FC<React.HTMLAttributes<HTMLAnchorElement>> = ({children, ...htmlAttributes}) => {
    return <LinkStyled {...htmlAttributes}>{children}</LinkStyled>
}