import { Balance } from "@/features/balance";
import { Layout, Typography } from "@/shared/ui";
import React from "react";
import { PortfolioStyled } from "./portfolio.styled";

export const Portfolio: React.FC = () => {
    return (
        <Layout>
            <PortfolioStyled>
                <Balance />
                <Typography type="title" weight="medium">Statistics</Typography>
            </PortfolioStyled>
        </Layout>
    );
}