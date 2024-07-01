import React from "react";

import { Button, Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";

export const InviteButton: React.FC = () => {
  const handleClick = () => {
    // обработчик клика
  };

  return (
    <Button type="gradient" size="md" onClick={handleClick}>
      <Stack gap={8} justify="center">
        <Typography type="title" weight="bold">
          Invite a friend
        </Typography>
        <Emodji emodjiName={emodjiTypes.EmodjiName.FRIEND} size={24} />
      </Stack>
    </Button>
  );
};
