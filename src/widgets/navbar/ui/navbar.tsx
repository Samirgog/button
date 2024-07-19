import React from "react";

import { useLocation } from "react-router-dom";

import { optionsNavbar } from "./consts";
import { NavbarItemWrapperStyled, NavbarWrapperStyled } from "./styled";

import { Emodji, Typography } from "@/shared/ui";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const getActiveTab = (id: string) => {
    return pathname.includes(id) || (id === "portfolio" && pathname === "/button/");
  };

  return (
    <NavbarWrapperStyled>
      {optionsNavbar.map(({ id, emodjiName, label }) => (
        <NavbarItemWrapperStyled $active={getActiveTab(id)} key={id} to={`/button/${id}`}>
          <Emodji emodjiName={emodjiName} size={24} />
          <Typography type="mini">{label}</Typography>
        </NavbarItemWrapperStyled>
      ))}
    </NavbarWrapperStyled>
  );
};
