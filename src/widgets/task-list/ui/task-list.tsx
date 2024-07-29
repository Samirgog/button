import React from "react";

import { useTaskList } from "../model";

import { Task } from "@/entities/task";
import { TTask } from "@/shared/generated";
import { Stack } from "@/shared/ui";
import { SlideInWrapper } from "@/shared/ui/slide-in-wrapper";

type Props = {
  shouldGetCurrentTasks?: boolean;
};

export const TaskList: React.FC<Props> = ({ shouldGetCurrentTasks = false }) => {
  const { tasks = [] } = useTaskList(shouldGetCurrentTasks);

  return (
    <Stack direction="column" gap={12}>
      {tasks.map((task, index) => {
        return (
          <SlideInWrapper key={task.id} direction={index % 2 === 0 ? "rtl" : "ltr"}>
            <Task task={task as TTask} showStats={shouldGetCurrentTasks} />
          </SlideInWrapper>
        );
      })}
    </Stack>
  );
};
