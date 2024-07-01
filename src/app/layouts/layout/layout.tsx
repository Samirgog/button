import React from 'react';
import { LayoutStyled } from './styled';
import {Navbar} from "@/widgets/navbar/ui";

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({...htmlAttributes}) => {
    return (
    <LayoutStyled {...htmlAttributes} />
  )
};
