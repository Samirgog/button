import styled from "styled-components";

export const EmodjiStyled = styled.div<{ $size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ $size }) => $size}px;
`;
