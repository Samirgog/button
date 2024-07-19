import styled from "styled-components";

import { Stack } from "@/shared/ui";

export const ButtonsWrapper = styled(Stack)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 24px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4);
`;
