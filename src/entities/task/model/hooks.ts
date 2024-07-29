import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { STORAGE_KEY_TASKS } from "@/entities/task/model/consts";
import { StorageTask } from "@/entities/task/model/types";
import { useUser } from "@/entities/user/model";
import { TTask, useCompleteTaskMutation } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";
import { emodjiConsts, emodjiTypes } from "@/shared/ui";
import { toast } from "react-toastify";
import { vibrate } from "@/shared/lib/navigator";

const LIMIT_MINUTES = 1;

export function useTask(task: TTask) {
  const queryClient = useQueryClient();
  const user = useUser();
  const { mutateAsync: completeTask, isLoading: isLoadingComplete } = useCompleteTaskMutation(
    gqlClient,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["User"] });
        await queryClient.invalidateQueries({ queryKey: ["Tasks"] });

        vibrate(200);
        toast(
          `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.MONEY_FACE]} Task completed. Buttons earned!`
        );
      },
      onError: () => {
        toast(
          `${emodjiConsts.MAP_NAMES_EMODJI[emodjiTypes.EmodjiName.ANGRY_FACE]} Server erorr! We are trying to fix. Please try later`
        );
      }
    }
  );
  const [inProgress, setInProgress] = useState(() => {
    const currentTasks: StorageTask[] = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]");

    return Boolean(currentTasks.find((item) => item.id === task?.id));
  });

  const getStorageTask = (id: number) => {
    const currentTasks: StorageTask[] = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]");

    return currentTasks.find((item) => item.id === id);
  };

  const setStorageTask = (id: number) => {
    const currentTask = getStorageTask(id);

    if (!currentTask) {
      const currentTasks: StorageTask[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]"
      );
      const newTasks: StorageTask[] = [...currentTasks, { id, timestamp: new Date() }];

      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(newTasks));
    }
  };

  const checkTask = async (id: number) => {
    const currentTask = getStorageTask(id);

    if (!currentTask || !user) {
      return;
    }

    const seconds = (new Date().getTime() - new Date(currentTask.timestamp).getTime()) / 1000;
    const limit = LIMIT_MINUTES * 60;

    if (seconds > limit) {
      const currentTasks: StorageTask[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]"
      );
      const newTasks: StorageTask[] = currentTasks.filter((task) => task.id !== id);

      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(newTasks));
      setInProgress(false);

      await completeTask({ userId: Number(user.id), completeTaskId: Number(currentTask.id) });

      return true;
    }

    return false;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    vibrate(200);
    window.open(task.url ?? "", "_blank");
    setStorageTask(task.id);
    setInProgress(true);
  };

  return {
    getHandlers: () => {
      return {
        onClick: handleClick
      };
    },
    setStorageTask,
    getStorageTask,
    checkTask,
    inProgress,
    isLoadingComplete
  };
}

export function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }

    return;
  }, [seconds]);

  return { seconds, setSeconds };
}
