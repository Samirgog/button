import React, { useState } from "react";

import { useTask } from "../model";

import { MAP_TASK_EMODJI, MAP_TASK_TYPES } from "@/entities/task/model/consts";
import { ButtonsWrapper, ErrorStyled } from "@/entities/task/ui/styled";
import { TTask, TTaskTypesEnum } from "@/shared/generated";
import { vibrate } from "@/shared/lib/telegram";
import { Button, Card, Emodji, Stack, Typography } from "@/shared/ui";
import { AvatarCircle } from "@/shared/ui/avatar-circle";

type Props = {
  task: TTask;
  showStats?: boolean;
};

export const Task: React.FC<Props> = ({ task }) => {
  const [moderation, setModeration] = useState(false);
  const { name, reward, type } = task ?? {};
  const { getHandlers, inProgress, checkTask, isLoadingComplete } = useTask(task);
  const { onClick } = getHandlers();

  const handleCheckTask = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    vibrate("soft");
    const checked = await checkTask(task?.id);

    setModeration(!checked);
  };

  return (
    <Card size="md" onClick={!inProgress ? onClick : undefined}>
      <Stack gap={8} justify="space-between" align="center">
        <Stack gap={12} align="center">
          <AvatarCircle>
            <Emodji emodjiName={MAP_TASK_EMODJI[type as TTaskTypesEnum]} size={24} />
          </AvatarCircle>
          <Stack direction="column" gap={4}>
            <Typography type="note" lineClamp={1}>
              {name}
            </Typography>
            <Typography type="mini" lineClamp={1} color="disabled">
              {MAP_TASK_TYPES[type as TTaskTypesEnum]}
            </Typography>
            <Stack gap={4} align="center">
              <Typography
                type="mini"
                color="warning"
              >{`${inProgress ? "" : "+"}${reward}`}</Typography>
              <img width={16} height={16} src={"/button/loaf_coin.png"} alt={"coin"} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {inProgress && (
        <ButtonsWrapper align="center" justify="flex-end" gap={8}>
          <Stack
            direction="column"
            align="flex-end"
            style={{ position: "relative", width: "fit-content" }}
          >
            <Button
              size="sm"
              onClick={handleCheckTask}
              disabled={moderation || isLoadingComplete}
              style={{ width: "70px" }}
            >
              Check
            </Button>
            {moderation && (
              <ErrorStyled type="micro" color="error">
                moderation
              </ErrorStyled>
            )}
          </Stack>

          <Button type="outline" size="sm" onClick={onClick}>
            Execute
          </Button>
        </ButtonsWrapper>
      )}
    </Card>
  );
};
