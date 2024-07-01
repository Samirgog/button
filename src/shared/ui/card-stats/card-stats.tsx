import React from 'react';
import {Card, Emodji, Stack, Typography} from "@/shared/ui";
import {EmodjiName} from "@/shared/ui/emodji/types";

type Props = {
  emodjiName: EmodjiName;
  title: string;
  total: number;
  dailyValue: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardStats: React.FC<Props> = ({emodjiName, title, total, dailyValue, ...htmlAttributes}) => {
  return (
    <Card size="sm" {...htmlAttributes}>
      <Stack direction="column" gap={16}>
        <Stack gap={10} align="center">
          <Emodji emodjiName={emodjiName} size={28} />
          <Typography type="text">{title}</Typography>
        </Stack>
        <Stack gap={10} align="center">
          <Typography type="text" weight="medium" color="warning">{total}</Typography>
          <Typography type="note" weight="medium">(+ {dailyValue})</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
