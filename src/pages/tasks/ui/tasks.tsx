import { Emodji, Stack, Typography, emodjiTypes, Link } from "@/shared/ui";
import React from "react";
import { TaskList } from "@/widgets/task-list";

export const Tasks: React.FC = () => {
  return (
    <Stack direction="column" gap={24}>
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
