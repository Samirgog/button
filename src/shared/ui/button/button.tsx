import React from "react";
import { SizeButton, TypeButton } from "./button.types";
import { ButtonStyled } from "./button.styled";

type Props = {
    type: TypeButton;
    size: SizeButton;
} & React.HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({type, size, ...htmlAttributes}) => {
    return <ButtonStyled $type={type} $size={size} {...htmlAttributes} />;
}