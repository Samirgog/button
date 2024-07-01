import React from "react";
import { Stack, Typography } from "@/shared/ui";
import { useBalance } from "../model";

export const Balance: React.FC = () => {
  const { balance } = useBalance();

  return (
    <Stack gap={16} align="center" justify="center">
      <img width={48} height={48} src={"/loaf_coin.png"} />
      <Typography type="mega" weight="bold">
        {balance}
      </Typography>
    </Stack>
  );
};
