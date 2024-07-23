import React from "react";

import { Emodji, emodjiTypes, Stack, Typography } from "@/shared/ui";
import { TaskList } from "@/widgets/task-list";

export const Tasks: React.FC = () => {
  return (
    <Stack direction="column" gap={20}>
      <Stack gap={12} align="center" justify="center">
        <Emodji emodjiName={emodjiTypes.EmodjiName.FLYING_MONEY} size={24} />
        <Typography type="title" weight="medium">
          Earn Buttons
        </Typography>
      </Stack>
      <TaskList />
    </Stack>
  );
};
