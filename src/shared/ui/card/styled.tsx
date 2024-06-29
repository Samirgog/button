import styled, { css } from "styled-components";
import { SizeCard } from "./types";

export const CardStyled = styled.div<{ $size: SizeCard}>`
    display: flex;
    background: linear-gradient(to right, rgba(255, 255, 255, 15%) 0%, rgba(255, 255, 255, 20%) 25%, rgba(255, 255, 255, 15%) 50%, rgba(255, 255, 255, 20%) 75%, rgba(255, 255, 255, 15%) 100%);
    border-radius: 25px;
    padding: 14px 20px;

    ${({$size}) => {
        if ($size === 'sm') {
            return css`
              min-height: 100px;
              min-width: 160px;  
            `;
        }

        if ($size === 'md') {
            return css`
                width: 100%;
            `;
        }

        if ($size === 'xl') {
            return css`
              width: 100%;  
            `;
        }

        return '';
    }}
`;