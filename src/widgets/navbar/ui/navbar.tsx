import React from "react";

import { useLocation } from "react-router-dom";

import { optionsNavbarCreator, optionsNavbarDefault } from "./consts";
import { NavbarItemWrapperStyled, NavbarWrapperStyled } from "./styled";

import { Emodji, Typography } from "@/shared/ui";

type Props = {
  mode?: "default" | "creator";
};

export const Navbar: React.FC<Props> = ({ mode = "default" }) => {
  const { pathname } = useLocation();
  const optionsNavbar = mode === "creator" ? optionsNavbarCreator : optionsNavbarDefault;

  const excludedPaths = ["golden-rain"];
  const isHidden = excludedPaths.filter((path) => pathname.includes(path)).length !== 0;

  const getActiveTab = (id: string) => {
    if (mode === "creator") {
      return pathname.includes(id) || (id === "create" && pathname === "/button/");
    }

    return pathname.includes(id) || (id === "portfolio" && pathname === "/button/");
  };

  if (isHidden) {
    return null;
  }

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
