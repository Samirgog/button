import React from "react";

import { Layout } from "@/app/layouts/layout";
import { userModel } from "@/entities/user";
import { InviteButton } from "@/features/invite-button";
import { Card, CardStats, emodjiTypes, Stack, Typography } from "@/shared/ui";
import { SlideInWrapper } from "@/shared/ui/slide-in-wrapper";
import { REFERRAL_BONUS } from "../model";

export const Friends: React.FC = () => {
  const user = userModel.useUser();

  return (
    <Layout style={{ overflowY: "hidden" }}>
      <Stack direction="column" gap={20}>
        <SlideInWrapper direction="ttb">
          <InviteButton />
        </SlideInWrapper>

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
              total={(user?.referrals?.length ?? 0) * REFERRAL_BONUS}
              style={{ flexBasis: "50%" }}
            />
          </Stack>
        </Stack>

        <Stack direction="column" gap={10}>
          <Typography type="title" weight="medium">
            Invite friends and get Bonus
          </Typography>
          <SlideInWrapper direction="btt">
            <Card size="xl">
              <Stack direction="column" align="center" gap={16}>
                <Stack align="center" justify="center" gap={12}>
                  <img width={48} height={48} src={"/button/loaf_coin.png"} alt={"coin"} />
                  <Typography type="mega" weight="semi-bold">
                    +{REFERRAL_BONUS}
                  </Typography>
                </Stack>
                <Typography type="text" weight="semi-bold">
                  FOR YOU AND A FRIEND
                </Typography>
              </Stack>
            </Card>
          </SlideInWrapper>
        </Stack>
      </Stack>
    </Layout>
  );
};
