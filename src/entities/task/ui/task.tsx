import React from "react";

import { TaskItem, useTask } from "../model";

import { MAP_TASK_EMODJI, MAP_TASK_TYPES } from "@/entities/task/model/consts";
import { ButtonsWrapper } from "@/entities/task/ui/styled";
import { Button, Card, Emodji, emodjiTypes, Link, Stack, Typography } from "@/shared/ui";
import { AvatarCircle } from "@/shared/ui/avatar-circle";

type Props = {
  task: TaskItem;
  showStats?: boolean;
};

export const Task: React.FC<Props> = ({ task, showStats = false }) => {
  const { title, reward, url, type, completed, total, remaining } = task ?? {};
  const { getHandlers, isInProgressTask, checkTask } = useTask(task);
  const isInProgress = isInProgressTask(task.id);

  return (
    <Card size="md" {...getHandlers()}>
      <Stack gap={8} justify="space-between" align="center">
        <Stack gap={12} align="center" style={{ opacity: isInProgress ? 0.3 : 1 }}>
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
              >{`${isInProgress ? "" : "+"}${reward}`}</Typography>
              <img width={16} height={16} src={"/button/loaf_coin.png"} alt={"coin"} />
            </Stack>
          </Stack>
        </Stack>
        {/*  <Stack direction="column" gap={4}>*/}
        {/*    <Typography type="micro">{total}</Typography>*/}
        {/*    <hr />*/}
        {/*    <Typography type="micro" color="link">*/}
        {/*      {total - remaining}*/}
        {/*    </Typography>*/}
        {/*  </Stack>*/}
      </Stack>
      {isInProgress && (
        <ButtonsWrapper align="center" justify="flex-end" gap={16}>
          <Button type="gradient" size="sm">
            Check
          </Button>
          <Link {...getHandlers()}>Execute</Link>
        </ButtonsWrapper>
      )}
    </Card>
  );
};
