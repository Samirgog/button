import styled, { css } from "styled-components";

import { SizeButton, TypeButton } from "./types";

export const ButtonStyled = styled.button<{
  $disabled: boolean;
  $type: TypeButton;
  $size: SizeButton;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 500;

  ${({ $type }) => {
    if ($type === "main") {
      return css`
        color: #ffffff;
        border: none;
        background: linear-gradient(to right, #feb602 0%, #ff4e2b 100%);

        &:hover {
          background: linear-gradient(to right, #ce9300 0%, #c73a1e 100%);
        }

        &:active {
          background: linear-gradient(to right, #ffc329 0%, #ff5c41 100%);
        }
      `;
    }

    if ($type === "outline") {
      return css`
        color: #ff4e2b;
        border: 1px solid #ff4e2b;
        background: transparent;

        &:hover {
          color: #c73a1e;
          border: 1px solid #c73a1e;
        }

        &:active {
          color: #ff5c41;
          border: 1px solid #ff5c41;
        }
      `;
    }

    return "";
  }}

  ${({ $disabled, $type }) => {
    if ($disabled && $type === "main") {
      return css`
        background: linear-gradient(to right, #797979 0%, #505050 100%) !important;
        color: #c2c2c2 !important;
      `;
    }

    if ($disabled && $type === "outline") {
      return css`
        border: 1px solid #797979 !important;
        color: #797979 !important;
      `;
    }

    return "";
  }}

  ${({ $size, $type }) => {
    if ($size === "sm") {
      return css`
        font-size: 16px;
        padding: ${$type === "outline" ? "7px 11px" : "8px 12px"};
      `;
    }

    if ($size === "md") {
      return css`
        padding: ${$type === "outline" ? "9px 15px" : "10px 16px"};
      `;
    }

    if ($size === "xl") {
      return css`
        border-width: ${$type === "outline" ? "2px" : "0px"};
        padding: ${$type === "outline" ? "12px 18px" : "14px 20px"};
      `;
    }

    return "";
  }}
`;
