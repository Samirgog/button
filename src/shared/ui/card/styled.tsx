import styled, { css } from "styled-components";

import { SizeCard } from "./types";

export const CardStyled = styled.div<{ $size: SizeCard }>`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 12px;

  ${({ $size }) => {
    if ($size === "sm") {
      return css`
        min-height: 70px;
        min-width: 160px;
      `;
    }

    if ($size === "md") {
      return css`
        width: 100%;
      `;
    }

    if ($size === "xl") {
      return css`
        width: 100%;
      `;
    }

    return "";
  }}
`;
