import React, { useState } from "react";

import { userModel } from "@/entities/user";
import { Button, Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";

export const InviteButton: React.FC = () => {
  const [isSharing, setIsSharing] = useState(false);
  const user = userModel.useUser();

  const handleClick = () => {
    if (user?.telegramId) {
      const referralLink = `https://t.me/nothing_but_ton_bot?start=referralId=${user?.telegramId}`;

      setIsSharing(true);

      if (navigator.share) {
        navigator
          .share({
            title: "Пригласить друга",
            text: "Присоединяйся ко мне выполняй задания, кроши батон и богатей!",
            url: referralLink
          })
          .catch((error) => console.error("Error sharing", error))
          .finally(() => setIsSharing(false));
      } else {
        navigator.clipboard
          .writeText(referralLink)
          .then(() => {
            alert("Ссылка скопирована в буфер обмена");
          })
          .catch((error) => console.error("Error copying link", error))
          .finally(() => setIsSharing(false));
      }
    }
  };

  return (
    <Button
      type="gradient"
      size="md"
      onClick={handleClick}
      disabled={isSharing}
      style={{ width: "100%" }}
    >
      <Stack gap={8} justify="center">
        <Typography type="title" weight="bold">
          Invite a friend
        </Typography>
        <Emodji emodjiName={emodjiTypes.EmodjiName.FRIEND} size={24} />
      </Stack>
    </Button>
  );
};
