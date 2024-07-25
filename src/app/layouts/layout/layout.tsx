import React from "react";

import { LayoutStyled } from "./styled";

import { Navbar } from "@/widgets/navbar";

type Props = {
  hideNavbar?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Layout: React.FC<Props> = ({ hideNavbar = false, children, ...htmlAttributes }) => {
  return (
    <LayoutStyled isHiddenNavbar={hideNavbar} {...htmlAttributes}>
      {children}
      {!hideNavbar && <Navbar />}
    </LayoutStyled>
  );
};
