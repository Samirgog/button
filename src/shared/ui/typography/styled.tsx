import styled, { css } from "styled-components";
import { ColorTypography, TypeTypography, WeightTypography } from "./types";

export const TypographyStyled = styled.span<{
  $type: TypeTypography;
  $weight: WeightTypography;
  $color: ColorTypography;
  $lineClamp?: number;
}>`
  font-family: "Roboto", sans-serif;
  font-weight: ${({ $weight }) => $weight};

  ${({ $type }) => {
    if ($type === "mega") {
      return css`
        font-size: 32px;
      `;
    }

    if ($type === "title") {
      return css`
        font-size: 24px;
      `;
    }

    if ($type === "text") {
      return css`
        font-size: 20px;
      `;
    }

    if ($type === "note") {
      return css`
        font-size: 16px;
      `;
    }

    if ($type === "mini") {
      return css`
        font-size: 14px;
      `;
    }

    return "";
  }}

  ${({ $color }) => {
    if ($color === "default") {
      return css`
        color: #fff;
      `;
    }

    if ($color === "warning") {
      return css`
        color: #feb602;
      `;
    }

    if ($color === "link") {
      return css`
        color: #ff4e2b;
      `;
    }

    if ($color === "disabled") {
      return css`
        color: #7f7a75;
      `;
    }
  }}

    ${({ $lineClamp }) => {
    if ($lineClamp) {
      return css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${$lineClamp};
        -webkit-box-orient: vertical;
        word-break: break-all;
      `;
    } else {
      return "";
    }
  }}
`;
