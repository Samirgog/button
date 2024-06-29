import React from "react";
import { LinkStyled } from "./styled";

type Props = {
    children: React.ReactElement;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({children, ...htmlAttributes}) => {
    return <LinkStyled {...htmlAttributes}>{children}</LinkStyled>
}