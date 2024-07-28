import styled, { keyframes } from "styled-components";

import { Typography } from "@/shared/ui";

export const GoldenRainContainerStyled = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  & > * {
    user-select: none;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fall = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(1000px);
  }
`;

const riseUp = keyframes`
  0% {
    transform: translateY(0);
      opacity: 1;
  }
  100% {
    transform: translateY(-30px);
      opacity: 0;
  }
`;

export const CoinContainerStyled = styled.div<{ factor: number; xOffset: number }>`
  position: absolute;
  top: 0;
  left: calc(45% + ${({ xOffset }) => xOffset}px);
  transform: translateY(-100px);
  z-index: ${({ factor }) => `${factor * 100}`};
  animation: ${fall} ${({ factor }) => `${2 * (2 - factor)}s`} linear;
`;

export const CoinWrapperStyled = styled.div`
  padding: 10px;
`;

export const CoinStyled = styled.img<{ factor: number }>`
  width: ${({ factor }) => `${25 * (1 + factor)}px`};
  height: ${({ factor }) => `${25 * (1 + factor)}px`};
  object-fit: contain;
  animation: ${spin} ${({ factor }) => `${0.5 * (1 + factor)}s`} linear infinite;
`;

export const RewardStyled = styled(Typography)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${riseUp} 2s ease-in;
`;
