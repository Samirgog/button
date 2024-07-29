import styled, { keyframes } from "styled-components";
import { DirectionSlideIn } from "./types";

const slideIn = (direction: DirectionSlideIn) => {
  let x = "0";
  let y = "0";

  if (direction === "ltr") {
    x = "-10%";
  }

  if (direction === "rtl") {
    x = "10%";
  }

  if (direction === "ttb") {
    y = "-10%";
  }

  if (direction === "btt") {
    y = "10%";
  }

  return keyframes`
    from {
      transform: translateX(${x}) translateY(${y});
      opacity: 0.5;
    }
    to {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }`;
};

export const SlideInWrapperStyled = styled.div<{ $direction: DirectionSlideIn }>`
  display: flex;
  width: 100%;
  animation: ${({ $direction }) => slideIn($direction)} 0.5s ease forwards;
`;
