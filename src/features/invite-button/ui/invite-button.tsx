import React from "react";

import { userModel } from "@/entities/user";
import { Button, Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";

const TEXT = "\nHi, friend! Join and earn buttons! Nothing but ton... Do you get it? 🤪🥖";

export const InviteButton: React.FC = () => {
  const user = userModel.useUser();

  const URl = `https://t.me/nothing_but_ton_bot/start?referralId=${user?.telegramId}`;
  const referralLink = `https://t.me/share/url?url=${encodeURI(URl)}&text=${encodeURI(TEXT)}`;

  // const handleClick = () => {
  //   if (user?.telegramId) {
  //     // const referralLink = `https://t.me/nothing_but_ton_bot?start=referralId=${user?.telegramId}`;
  //     const url = 'https://t.me/nothing_but_ton_bot';
  //     const text = 'Hi, friend! Join and earn buttons! Nothing but ton... Do you get it? 🤪🥖 from text';
  //     const referralLink = `https://t.me/share/url?url=${encodeURI(url)}&text=${encodeURI(text)}`;
  //
  //       setIsSharing(true);
  //
  //     if (navigator.share) {
  //       navigator
  //         .share({
  //           title: "Пригласить друга",
  //           text: "Присоединяйся ко мне выполняй задания, кроши батон и богатей!",
  //           url: referralLink
  //         })
  //         .catch((error) => console.error("Error sharing", error))
  //         .finally(() => setIsSharing(false));
  //     } else {
  //       navigator.clipboard
  //         .writeText(referralLink)
  //         .then(() => {
  //           alert("Ссылка скопирована в буфер обмена");
  //         })
  //         .catch((error) => console.error("Error copying link", error))
  //         .finally(() => setIsSharing(false));
  //     }
  //   }
  // };

  // return (
  //   <Button
  //     type="gradient"
  //     size="md"
  //     onClick={handleClick}
  //     disabled={isSharing}
  //     style={{ width: "100%" }}
  //   >
  //     <Stack gap={8} justify="center" align="center">
  //       <Typography type="title" weight="bold">
  //         Invite a friend
  //       </Typography>
  //       <Emodji emodjiName={emodjiTypes.EmodjiName.FRIEND} size={24} />
  //     </Stack>
  //   </Button>
  // );

  return (
    <a href={referralLink}>
      <Stack gap={8} justify="center" align="center">
        <Typography type="title" weight="bold">
          Invite a friend
        </Typography>
        <Emodji emodjiName={emodjiTypes.EmodjiName.FRIEND} size={24} />
      </Stack>
    </a>
  );
};
