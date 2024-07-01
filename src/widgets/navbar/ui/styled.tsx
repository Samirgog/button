import styled, { css } from "styled-components";
import {Link} from "react-router-dom";

export const NavbarWrapperStyled = styled.div`
    display: flex;
    border-radius: 16px;
    background: #222;
    padding: 5px;
    gap: 16px;
    align-items: center;
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
`;

export const NavbarItemWrapperStyled = styled(Link)<{ $active?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 16px;
    border-radius: 16px;
    flex-basis: calc(100%/3);

    ${({$active}) => $active && css`
        background: rgba(17, 17, 17, 50%);
    `}
`;
