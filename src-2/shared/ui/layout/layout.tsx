import React from 'react';
import { LayoutStyled } from './layout.styled';

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({...htmlAttributes}) => {
    return <LayoutStyled {...htmlAttributes} />;
};