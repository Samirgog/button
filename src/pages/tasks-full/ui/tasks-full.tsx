import { Layout, Link, Stack, Typography } from "@/shared/ui";
import React from "react";
import { TaskList, taskListModel } from '@/widgets/task-list'

export const TasksFull: React.FC = () => {
    const {sections = []} = taskListModel.useTaskList();

    return (
        <Layout>
            <Stack direction="column" gap={24}>
                <Link>BACK</Link>
                <Stack direction="column">
                    {sections.map(({name, items}) => (
                        <Stack direction="column" gap={16}>
                            <Typography>{name}</Typography>
                            <TaskList tasks={items} />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Layout>
    );
}