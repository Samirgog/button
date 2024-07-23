import React from "react";

import { Card, Emodji, Stack, Typography } from "@/shared/ui";
import { EmodjiName } from "@/shared/ui/emodji/types";

type Props = {
  emodjiName: EmodjiName;
  title: string;
  total: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardStats: React.FC<Props> = ({ emodjiName, title, total, ...htmlAttributes }) => {
  return (
    <Card size="sm" {...htmlAttributes}>
      <Stack direction="column" gap={8}>
        <Stack gap={8} align="center">
          <Emodji emodjiName={emodjiName} size={20} />
          <Typography type="text">{title}</Typography>
        </Stack>
        <Stack gap={8} align="center">
          <Typography type="text" weight="medium" color="warning">
            {total}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
