import React from "react";

import { TonConnectButton } from "@tonconnect/ui-react";

import { Balance } from "@/entities/balance";
import { userModel } from "@/entities/user";
import { Button, emodjiTypes, Stack, Typography } from "@/shared/ui";
import { CardStats } from "@/shared/ui/card-stats";

export const Portfolio: React.FC = () => {
  const user = userModel.useUser();

  return (
    <Stack direction="column" gap={24}>
      <Stack direction="column" gap={16} style={{ width: "100%" }}>
        <Stack justify="space-between" align="center">
          <Typography type="title" weight="bold">
            BUTTON
          </Typography>
          <TonConnectButton style={{ alignSelf: "flex-end" }} />
        </Stack>
        <Balance balance={user?.balance ?? 0} />
        <Button type="main" size="xl" disabled style={{ width: "100%" }}>
          <Stack gap={8} justify="center" align="center">
            <Typography type="title">Convert to TON</Typography>
            <img width={28} height={28} src={"/button/ton.png"} alt={"ton"} />
            <Typography type="mini">(soon)</Typography>
          </Stack>
        </Button>
      </Stack>
      <Typography type="title" weight="medium">
        Statistics
      </Typography>
      <Stack gap={16} style={{ width: "100%" }}>
        <CardStats
          title="Completed"
          emodjiName={emodjiTypes.EmodjiName.SUCCESS_CHECK}
          total={user?.completedTasks?.length ?? 0}
          style={{ flexBasis: "50%" }}
        />
        <CardStats
          title="Earned"
          emodjiName={emodjiTypes.EmodjiName.FLYING_MONEY}
          total={user?.earned ?? 0}
          style={{ flexBasis: "50%" }}
        />
      </Stack>
    </Stack>
  );
};
