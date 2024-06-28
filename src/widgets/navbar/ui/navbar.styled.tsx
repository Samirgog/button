import styled, { css } from "styled-components";

export const NavbarWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    border-radius: 25px;
    background: #222;
    padding: 5px 40px;
    gap: 24px;
    align-items: center;
`;

export const NavbarItemWrapperStyled = styled.div<{ $active?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 4px;

    ${({$active}) => $active && css`
        background: rgba(17, 17, 17, 50%);
    `}
`;