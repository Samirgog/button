import React from "react";
import { EmodjiName } from "./emodji.types";
import { MAP_NAMES_EMODJI } from "./emodji.consts";
import { EmodjiStyled } from "./emodji.styled";

type Props = {
    emodjiName: EmodjiName;
    size?: number;
};

export const Emodji: React.FC<Props> = ({size = 16, emodjiName}) => {
    return <EmodjiStyled $size={size}>{MAP_NAMES_EMODJI[emodjiName]}</EmodjiStyled>
}