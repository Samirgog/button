import styled, { css, keyframes } from "styled-components";

export const CardGameStyled = styled.div<{ $bgImage?: string; $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 12px;
  min-height: 78px;
  min-width: 160px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

  ${({ $bgImage }) => {
    if ($bgImage) {
      return css`
        position: relative;
        background-image: url("${$bgImage}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 150%;
        backdrop-filter: none;

        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 20px;
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.45) 45%,
            rgba(0, 0, 0, 0.75) 100%
          );
        }
      `;
    }
    return "";
  }}
`;

const pulse = keyframes`
  0% {
    transform: scale(1.3);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.3);
    opacity: 1;
  }
`;

export const IndicatorBadge = styled.div`
  position: absolute;
  z-index: 10;
  right: 8px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fa0a0a;
  animation: ${pulse} 1s infinite;
`;
