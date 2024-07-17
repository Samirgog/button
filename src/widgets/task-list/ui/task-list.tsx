import React from "react";

import { useTaskList } from "../model";

import { Task } from "@/entities/task";
import { Stack } from "@/shared/ui";

type Props = {
  shouldGetCurrentTasks?: boolean;
};

export const TaskList: React.FC<Props> = ({ shouldGetCurrentTasks = false }) => {
  const { items = [] } = useTaskList(shouldGetCurrentTasks);

  return (
    <Stack direction="column" gap={12}>
      {items.map((task) => {
        return <Task key={task.id} task={task} showStats={shouldGetCurrentTasks} />;
      })}
    </Stack>
  );
};
