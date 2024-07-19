import { STORAGE_KEY_TASKS } from "@/entities/task/model/consts";
import { StorageTask, TaskItem } from "@/entities/task/model/types";

export function useTask(task: TaskItem) {
  const setStorageTask = (id: number) => {
    const currentTasks: StorageTask[] = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]");
    const newTasks: StorageTask[] = isInProgressTask(id)
      ? currentTasks.map((task) => {
          if (task.id === id) {
            return { id, timestamp: new Date() };
          }
          return task;
        })
      : [...currentTasks, { id, timestamp: new Date() }];

    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(newTasks));
  };

  const getStorageTask = (id: number) => {
    const currentTasks: StorageTask[] = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]");

    return currentTasks.find((item) => item.id === id);
  };

  const checkTask = (id: number) => {
    const currentTask = getStorageTask(id);

    if (!currentTask) {
      return;
    }

    const seconds = (new Date().getTime() - currentTask.timestamp.getTime()) / 1000;
    const limit = 5 * 60;

    if (seconds > limit) {
      const currentTasks: StorageTask[] = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS) ?? "[]");
      const newTasks: StorageTask[] = currentTasks.filter((task) => task.id !== id);

      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(newTasks));

      return true;
    }

    return false;
  };

  function isInProgressTask(id: number) {
    const currentTask = getStorageTask(id);

    return Boolean(currentTask);
  }

  const handleClick = () => {
    window.open(task.url, "_blank");
    setStorageTask(task.id);
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
    isInProgressTask
  };
}
