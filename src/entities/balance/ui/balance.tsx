import React from "react";

import { useBalance } from "../model";

import { Stack, Typography } from "@/shared/ui";

export const Balance: React.FC = () => {
  const { balance } = useBalance();

  return (
    <Stack gap={16} align="center" justify="center">
      <img width={48} height={48} src={"/button/loaf_coin.png"} alt={"coin"} />
      <Typography type="mega" weight="bold">
        {balance}
      </Typography>
    </Stack>
  );
};
