import styled from "styled-components";

import { Stack, Typography } from "@/shared/ui";

export const ButtonsWrapper = styled(Stack)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 24px;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-radius: 20px;
  z-index: 20;
`;

export const ErrorStyled = styled(Typography)`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
`;
