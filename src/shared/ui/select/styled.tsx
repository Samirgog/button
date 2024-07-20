import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectLabelStyled = styled.label`
  font-size: 14px;
  color: #bfbfbf;
`;

export const SelectStyled = styled.input`
  background-image: linear-gradient(#ff4e2b, #ff4e2b), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position:
    center bottom,
    center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size:
    0 2px,
    100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;

  &:focus {
    background-size:
      100% 2px,
      100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;

export const ModalSelectStyled = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 0;
  top: 25%;
  z-index: 10px;
  background-color: #222;
  padding: 24px 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const RadioButtonStyled = styled.div<{ $checked?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.$checked ? "#ff4e2b" : "transparent")};
  border: 1px solid blue;
  border-radius: 50%;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px #ff4e2b;
  }
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;
