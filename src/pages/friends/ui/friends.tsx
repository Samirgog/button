import React from "react";

import { BonusCard } from "@/features/bonus-card";
import { FriendsCard } from "@/features/friends-card";
import { InviteButton } from "@/features/invite-button";
import { Card, Stack, Typography } from "@/shared/ui";

export const Friends: React.FC = () => {
  return (
    <Stack direction="column" gap={24}>
      <InviteButton />
      <Stack direction="column" gap={8}>
        <Typography type="title" weight="medium">
          Statistics
        </Typography>
        <Stack gap={16}>
          <FriendsCard />
          <BonusCard />
        </Stack>
      </Stack>
      <Stack direction="column" gap={8}>
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
