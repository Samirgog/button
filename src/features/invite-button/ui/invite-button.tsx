import React from "react";

import { userModel } from "@/entities/user";
import { vibrate } from "@/shared/lib/telegram";
import { Button, Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";

const TEXT = "\nHi, friend! Join and earn buttons! Nothing but ton... Do you get it? 🤪🥖";

export const InviteButton: React.FC = () => {
  const user = userModel.useUser();

  const URl = `https://t.me/nothing_but_ton_bot?start=r_${user?.telegramId}`;
  const referralLink = `https://t.me/share/url?url=${encodeURI(URl)}&text=${encodeURI(TEXT)}`;

  const handleClick = () => {
    vibrate("soft");
  };

  return (
    <Stack direction="column" gap={8}>
      <Button size="md" style={{ width: "100%" }} onClick={handleClick}>
        <a href={referralLink}>
          <Stack gap={8} justify="center" align="center">
            <Typography type="title" weight="bold">
              Invite a friend via link
            </Typography>
            <Emodji emodjiName={emodjiTypes.EmodjiName.FRIEND} size={24} />
          </Stack>
        </a>
      </Button>
    </Stack>
  );
};
