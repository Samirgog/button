import React from "react";
import { EmodjiName } from "./types";
import { MAP_NAMES_EMODJI } from "./consts";
import { EmodjiStyled } from "./styled";

type Props = {
    emodjiName: EmodjiName;
    size?: number;
};

export const Emodji: React.FC<Props> = ({size = 16, emodjiName}) => {
    return <EmodjiStyled $size={size}>{MAP_NAMES_EMODJI[emodjiName]}</EmodjiStyled>
}