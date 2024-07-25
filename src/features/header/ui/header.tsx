import React from "react";

import { useNavigate } from "react-router-dom";

import { BackButton, Pusher } from "@/features/header/ui/styled";
import { Stack, Typography } from "@/shared/ui";

type Props = {
  title?: string;
  withBack?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<Props> = ({ title, withBack, ...htmlAttributes }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Stack align="center" justify="space-between" gap={8} {...htmlAttributes}>
      {withBack && (
        <BackButton onClick={handleBackClick}>
          <Typography type="note" color="warning">
            Back
          </Typography>
        </BackButton>
      )}

      {title && (
        <Typography type="mega" weight="bold" color="warning">
          {title}
        </Typography>
      )}

      <Pusher />
    </Stack>
  );
};
