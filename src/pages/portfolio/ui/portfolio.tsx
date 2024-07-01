import React from "react";

import { TonConnectButton } from "@tonconnect/ui-react";

import { Balance } from "@/entities/balance";
import { CompletedCard } from "@/features/completed-card";
import { EarnedCard } from "@/features/earned-card";
import { Button, Stack, Typography } from "@/shared/ui";

export const Portfolio: React.FC = () => {
  return (
    <Stack direction="column" gap={24}>
      <Stack direction="column" gap={16} style={{ width: "100%" }}>
        <Stack justify="space-between" align="center">
          <Typography type="title" weight="bold">
            BUTTON
          </Typography>
          <TonConnectButton style={{ alignSelf: "flex-end" }} />
        </Stack>
        <Balance />
        <Button type="main" size="xl" disabled>
          <Stack gap={8} justify="center" align="center">
            <Typography type="title">Convert to TON</Typography>
            <img width={28} height={28} src={"/ton.png"} alt={"ton"} />
            <Typography type="mini">(soon)</Typography>
          </Stack>
        </Button>
      </Stack>
      <Typography type="title" weight="medium">
        Statistics
      </Typography>
      <Stack gap={16} style={{ width: "100%" }}>
        <CompletedCard />
        <EarnedCard />
      </Stack>
    </Stack>
  );
};
