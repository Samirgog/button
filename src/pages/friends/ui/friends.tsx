import React from "react";

import { userModel } from "@/entities/user";
import { InviteButton } from "@/features/invite-button";
import { Card, CardStats, emodjiTypes, Stack, Typography } from "@/shared/ui";

export const Friends: React.FC = () => {
  const user = userModel.useUser();

  return (
    <Stack direction="column" gap={20}>
      <InviteButton />

      <Stack direction="column" gap={10}>
        <Typography type="title" weight="medium">
          Statistics
        </Typography>
        <Stack gap={12}>
          <CardStats
            title="Friends"
            emodjiName={emodjiTypes.EmodjiName.WEED_GESTURE}
            total={user?.referrals?.length ?? 0}
            style={{ flexBasis: "50%" }}
          />
          <CardStats
            title="Bonus"
            emodjiName={emodjiTypes.EmodjiName.MONEY_STACK}
            total={(user?.referrals?.length ?? 0) * 150}
            style={{ flexBasis: "50%" }}
          />
        </Stack>
      </Stack>

      <Stack direction="column" gap={10}>
        <Typography type="title" weight="medium">
          Invite friends and get Bonus
        </Typography>
        <Card size="xl">
          <Stack direction="column" align="center" gap={24}>
            <Stack align="center" justify="center" gap={12}>
              <img width={48} height={48} src={"/button/loaf_coin.png"} alt={"coin"} />
              <Typography type="mega" weight="semi-bold">
                +150
              </Typography>
            </Stack>
            <Typography type="text" weight="semi-bold">
              FOR YOU AND A FRIEND
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};
