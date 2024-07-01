import { Card, Emodji, Stack, Typography, emodjiTypes } from "@/shared/ui";
import { AvatarCircle } from "@/shared/ui/avatar-circle";
import React from "react";
import { TaskItem, useTask } from "../model";
import { MAP_TASK_EMODJI, MAP_TASK_TYPES } from "@/entities/task/model/consts";

type Props = {
  task: TaskItem;
};

export const Task: React.FC<Props> = ({ task }) => {
  const { title, reward, url, type, completed } = task ?? {};
  const { getHandlers } = useTask(url);

  return (
    <Card size="md" {...getHandlers()}>
      <Stack gap={8} justify="space-between" align="center">
        <Stack gap={12} align="center" style={{ opacity: completed ? 0.3 : 1 }}>
          <AvatarCircle>
            <Emodji emodjiName={MAP_TASK_EMODJI[type]} size={24} />
          </AvatarCircle>
          <Stack direction="column" gap={4}>
            <Typography type="note" lineClamp={1}>
              {title}
            </Typography>
            <Typography type="mini" lineClamp={1} color="disabled">
              {MAP_TASK_TYPES[type]}
            </Typography>
            <Stack gap={4} align="center">
              <Typography
                type="mini"
                color="warning"
              >{`${completed ? "" : "+"}${reward}`}</Typography>
              <img width={16} height={16} src="/loaf_coin.png" />
            </Stack>
          </Stack>
        </Stack>
        <Emodji
          emodjiName={
            completed
              ? emodjiTypes.EmodjiName.SUCCESS_CHECK
              : emodjiTypes.EmodjiName.ARROW_RIGHT
          }
        />
      </Stack>
    </Card>
  );
};
