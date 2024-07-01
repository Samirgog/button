import styled from "styled-components";

import { AlignStack, DirectionStack, JustifyStack } from "./types";

export const StackStyled = styled.div<{
  $direction: DirectionStack;
  $align: AlignStack;
  $justify: JustifyStack;
  $gap: number;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap}px;
  width: 100%;
`;
