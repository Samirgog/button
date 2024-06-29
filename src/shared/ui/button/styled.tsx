import styled, { css } from "styled-components";
import { SizeButton, TypeButton } from "./types";

export const ButtonStyled = styled.button<{ $disabled: boolean; $type: TypeButton; $size: SizeButton }>`
  display: flex;
  border-radius: 25px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: medium;

  ${({$disabled}) => $disabled && css`
      opacity: 0.5;  
  `}

  ${({$type}) => {
    if ($type === 'main') {
        return css`
            background: #feb602;
            box-shadow: inset 0 4px 4px 0 #000;;
        `;
    }

    if ($type === 'gradient') {
        return css`
          background: linear-gradient(to right, #feb602 0%, #ff4e2b 100%);  
        `;
    }

    return '';
  }}

  ${({$size}) => {
    if ($size === 'md') {
        return css`
            padding: 10px 0 10px 36px;
            width: 270px;
        `;
    }

    if ($size === 'xl') {
        return css`
          width: 100%;
          padding: 16px 0 16px 44px;
        `;
    }

    return '';
  }}
`;