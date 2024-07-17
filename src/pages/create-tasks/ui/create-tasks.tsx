import React from "react";

import { TonConnectButton } from "@tonconnect/ui-react";

import { Balance } from "@/entities/balance";
import { Stack, Typography } from "@/shared/ui";
import { TaskList } from "@/widgets/task-list";

export const CreateTasks: React.FC = () => {
  return (
    <Stack direction="column" gap={24}>
      <Stack direction="column" gap={16} style={{ width: "100%" }}>
        <Stack justify="space-between" align="center">
          <Typography type="title" weight="bold">
            BUTTON
          </Typography>
          <TonConnectButton style={{ alignSelf: "flex-end" }} />
        </Stack>
        <Balance />
      </Stack>
      <Typography type="title" weight="medium">
        My tasks
      </Typography>
      <Stack gap={16} style={{ width: "100%" }}>
        <TaskList shouldGetCurrentTasks />
      </Stack>
    </Stack>
  );
};
