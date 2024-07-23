import React from "react";

import { useTaskList } from "../model";

import { Task } from "@/entities/task";
import { Stack } from "@/shared/ui";
import { TTask } from "@/shared/generated";

type Props = {
  shouldGetCurrentTasks?: boolean;
};

export const TaskList: React.FC<Props> = ({ shouldGetCurrentTasks = false }) => {
  const { tasks = [], refetch } = useTaskList(shouldGetCurrentTasks);

  return (
    <Stack direction="column" gap={12}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task as TTask}
            showStats={shouldGetCurrentTasks}
            onComplete={refetch}
          />
        );
      })}
    </Stack>
  );
};
