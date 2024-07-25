import styled from "styled-components";

export const LayoutStyled = styled.div<{ isHiddenNavbar: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  padding: ${({ isHiddenNavbar }) => (isHiddenNavbar ? "24px 16px" : "24px 16px 106px 16px")};
  overflow-y: auto;
`;
