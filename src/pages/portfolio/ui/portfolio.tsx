import React from "react";

import { TonConnectButton } from "@tonconnect/ui-react";

import { Layout } from "@/app/layouts/layout";
import { Balance } from "@/entities/balance";
import { userModel } from "@/entities/user";
import { ConvertButton } from "@/features/convert-button";
import { GoldenRainCard } from "@/features/golden-rain-card";
import { emodjiTypes, Stack, Typography } from "@/shared/ui";
import { CardStats } from "@/shared/ui/card-stats";

export const Portfolio: React.FC = () => {
  const user = userModel.useUser();

  return (
    <Layout>
      <Stack direction="column" gap={20}>
        <Stack direction="column" gap={14} style={{ width: "100%" }}>
          <Stack justify="space-between" align="center">
            <Typography type="mega" weight="bold">
              BUTTON
            </Typography>
            <TonConnectButton style={{ alignSelf: "flex-end" }} />
          </Stack>
          <Balance balance={user?.balance ?? 0} />
          <ConvertButton />
        </Stack>

        <Stack direction="column" gap={10}>
          <Typography type="title" weight="medium">
            Daily games
          </Typography>
          <Stack gap={12} style={{ width: "100%" }}>
            <GoldenRainCard style={{ width: 'calc(50% - 6px)' }} />
          </Stack>
        </Stack>

        <Stack direction="column" gap={10}>
          <Typography type="title" weight="medium">
            Statistics
          </Typography>
          <Stack gap={12} style={{ width: "100%" }}>
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
      </Stack>
    </Layout>
  );
};
