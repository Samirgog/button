import styled from "styled-components";
import { DirectionStack } from "./types";

export const StackStyled = styled.div<{ $direction: DirectionStack; $gap: number }>`
    display: flex;
    flex-direction: ${({$direction}) => $direction};
    gap: ${({$gap}) => $gap}px;
`;