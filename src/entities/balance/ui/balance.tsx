import React from "react";
import { Stack, Typography } from "@/shared/ui";
import { useBalance } from "../model";

export const Balance: React.FC = () => {
    const {balance} = useBalance();

    return (
        <Stack gap={16}>
            <img src={'/coin_64.png'} />
            <Typography type="mega" weight="medium">{balance}</Typography>
        </Stack>
    );
}