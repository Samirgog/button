import styled from "styled-components";

export const MobileOnlyQRStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const QRCode = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 16px;
`;
