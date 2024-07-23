import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: 8px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #262626;
  color: white;
  border-radius: 8px;
  width: 60px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`;
