import { Stack } from "@/shared/ui";
import React from "react";
import { Task, taskModel } from "@/entities/task";

type Props = {
    tasks: taskModel.TaskItem[];
}

export const TaskList: React.FC<Props> = ({tasks}) => {
    return (
        <Stack direction="column" gap={12}>
            {tasks.map((task) => {
                return <Task task={task} />
            })}
        </Stack>
    );
}