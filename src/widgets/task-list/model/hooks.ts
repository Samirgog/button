import { TaskItem, TaskType } from "@/entities/task/model";

const mock: { items: TaskItem[] } = {
  items: [
    {
      id: 1,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: false,
    },
    {
      id: 2,
      title: "Дима Масленников",
      reward: 150,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.SUBSCRIBE,
      completed: false,
    },
    {
      id: 3,
      title: "Телеграм Димы Масленникова",
      reward: 25,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.TELEGRAM,
      completed: true,
    },
    {
      id: 4,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: false,
    },
    {
      id: 5,
      title: "Заголовок какого-то видоса",
      reward: 100,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: true,
    },
    {
      id: 6,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: false,
    },
  ],
};
export function useTaskList() {
  // TODO: реализация запроса списка задач

  return mock;
}
