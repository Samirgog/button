import React from "react";
import { BalanceStyled } from "./balance.styled";
import { Typography } from "@/shared/ui";
import { useBalance } from "../model";

export const Balance: React.FC = () => {
    const {balance} = useBalance();

    return <BalanceStyled>
        <img src={require('../../../../public/coin_64.png')?.default} />
        <Typography type="mega" weight="medium">{balance}</Typography>
    </BalanceStyled>
}