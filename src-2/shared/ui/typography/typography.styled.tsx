import styled, { css } from "styled-components";
import { ColorTypography, TypeTypography, WeightTypography } from "./typography.types";

export const TypographyStyled = styled.span<{
     $type: TypeTypography; 
     $weight: WeightTypography; 
     $color: ColorTypography 
    }>`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ $weight }) => $weight};
    
    ${({ $type }) => {
        if ($type === 'title') {
            return css`
                font-size: 24px;
            `;
        }

        if ($type === 'text') {
            return css`
                font-size: 20px;
            `;
        }

        if ($type === 'note') {
            return css`
                font-size: 16px;
            `;
        }

        return '';
    }}

    ${({ $color }) => {
        if ($color === 'default') {
            return css`
                color: #fff;
            `;
        }

        if ($color === 'warning') {
            return css`
                color: #feb602;
            `;
        }

        if ($color === 'link') {
            return css`
                color: #ff4e2b;
            `;
        }
    }}
`