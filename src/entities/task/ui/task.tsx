import { Card, Emodji, Stack, Typography, emodjiTypes } from "@/shared/ui";
import { AvatarCircle } from "@/shared/ui/avatar-circle";
import React from "react";
import { TaskItem, useTask } from "../model";

type Props = {
    task: TaskItem;
};

export const Task: React.FC<Props> = ({task}) => {
    const {title, reward, url, emodji} = task ?? {};
    const {getHandlers} = useTask(url);

    return (
        <Card size="md" {...getHandlers()}>
            <Stack style={{justifyContent: 'space-between'}}>
                <Stack gap={12}>
                    <AvatarCircle>
                        <Emodji size={24}>{emodji}</Emodji>
                    </AvatarCircle>
                    <Stack direction="column" gap={8}>
                        <Typography type="text">{title}</Typography>
                        <Typography type="note" color="warning">+{reward}</Typography>
                    </Stack>
                </Stack>
                <Emodji emodjiName={emodjiTypes.EmodjiName.ARROW_RIGHT} />
            </Stack>
        </Card>
    )
}