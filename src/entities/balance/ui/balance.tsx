import React from "react";

import { Stack, Typography } from "@/shared/ui";

type Props = {
  balance: number;
};

export const Balance: React.FC<Props> = ({ balance }) => {
  return (
    <Stack gap={16} align="center" justify="center">
      <img width={48} height={48} src={"/button/loaf_coin.png"} alt={"coin"} />
      <Typography type="mega" weight="bold">
        {balance}
      </Typography>
    </Stack>
  );
};
