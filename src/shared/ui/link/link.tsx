import React from "react";
import { LinkStyled } from "./link.styled";

type Props = {
    children: React.ReactElement;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({children, ...htmlAttributes}) => {
    return <LinkStyled {...htmlAttributes}>{children}</LinkStyled>
}