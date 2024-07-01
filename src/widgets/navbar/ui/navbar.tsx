import React from "react";

import { useLocation } from "react-router-dom";

import { optionsNavbar } from "./consts";
import { NavbarItemWrapperStyled, NavbarWrapperStyled } from "./styled";

import { Emodji, Typography } from "@/shared/ui";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <NavbarWrapperStyled>
      {optionsNavbar.map(({ id, emodjiName, label }) => (
        <NavbarItemWrapperStyled $active={pathname.includes(id)} key={id} to={`/${id}`}>
          <Emodji emodjiName={emodjiName} size={24} />
          <Typography type="mini">{label}</Typography>
        </NavbarItemWrapperStyled>
      ))}
    </NavbarWrapperStyled>
  );
};
