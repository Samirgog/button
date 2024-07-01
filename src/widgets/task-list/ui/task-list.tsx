import { Stack } from "@/shared/ui";
import React from "react";
import { Task } from "@/entities/task";
import { useTaskList } from "@/widgets/task-list/model";

export const TaskList = () => {
  const { items = [] } = useTaskList();

  return (
    <Stack direction="column" gap={12}>
      {items.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </Stack>
  );
};
