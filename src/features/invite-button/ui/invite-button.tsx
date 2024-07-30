import React from "react";

import { userModel } from "@/entities/user";
import { vibrate } from "@/shared/lib/telegram";
import { Button, Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";

const TEXT = "\nHi, friend! Join and earn buttons! Nothing but ton... Do you get it? 🤪🥖";

export const InviteButton: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const referralId = queryParams.get("referralId");

  const user = userModel.useUser();

  const URl = `https://t.me/nothing_but_ton_bot?start=r_${user?.telegramId}`;
  const referralLink = `https://t.me/share/url?url=${encodeURI(URl)}&text=${encodeURI(TEXT)}`;

  const handleClick = () => {
    vibrate("soft");
  };
  // const handleClick = () => {
  //   if (user?.telegramId) {
  //     const referralLink = `https://t.me/nothing_but_ton_bot/start?referralId=${user?.telegramId}`;
  //     // const url = "https://t.me/nothing_but_ton_bot";
  //     // const text =
  //     //   "Hi, friend! Join and earn buttons! Nothing but ton... Do you get it? 🤪🥖 from text";
  //     // const referralLink = `https://t.me/share/url?url=${encodeURI(url)}&text=${encodeURI(text)}`;
  //     if (navigator.share) {
  //       navigator
  //         .share({
  //           title: "Invite friend",
  //           text: "Play with me!!!!",
  //           url: referralLink
  //         })
  //         .catch((error) => console.error("Error sharing", error));
  //     } else {
  //       navigator.clipboard
  //         .writeText(referralLink)
  //         .then(() => {
  //           alert("Ссылка скопирована в буфер обмена");
  //         })
  //         .catch((error) => console.error("Error copying link", error));
  //     }
  //   }
  // };

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
