import React, { useState } from "react";
import { NavbarItemWrapperStyled, NavbarWrapperStyled } from "./styled";
import { Emodji, Typography } from '@/shared/ui';
import { IdNavbarItem } from "./types";
import { optionsNavbar } from "./consts";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
    const [currentNavItem, setCurrentNavItem] = useState<IdNavbarItem>('portfolio');
    const navigate = useNavigate();

    const getHandleClickNavItem = (id: IdNavbarItem) => () => {
        setCurrentNavItem(id);
        navigate(`/${id}`);
    }

    return <NavbarWrapperStyled>
        {optionsNavbar.map(({id, emodjiName, label}) => (
            <NavbarItemWrapperStyled $active={id === currentNavItem} key={id} onClick={getHandleClickNavItem(id)}>
                <Emodji emodjiName={emodjiName} />
                <Typography type="mini">{label}</Typography>
            </NavbarItemWrapperStyled>
        ))}
    </NavbarWrapperStyled>
}