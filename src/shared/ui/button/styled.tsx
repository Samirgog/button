import styled, { css } from "styled-components";
import { SizeButton, TypeButton } from "./types";

export const ButtonStyled = styled.button<{ $disabled: boolean; $type: TypeButton; $size: SizeButton }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  border: none;
  width: 100%;

  ${({$disabled}) => $disabled && css`
      opacity: 0.5;  
  `}

  ${({$type}) => {
    if ($type === 'main') {
        return css`
            background: #feb602;
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
            padding: 10px;
        `;
    }

    if ($size === 'xl') {
        return css`
          padding: 16px;
        `;
    }

    return '';
  }}
`;
