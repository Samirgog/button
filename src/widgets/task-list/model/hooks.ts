import { TaskItem, TaskType } from "@/entities/task/model";
import { TSortDirection, TTaskSortFields, useTasksQuery } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";

const mock: { items: TaskItem[] } = {
  items: [
    {
      id: 1,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://t.me/notcoin",
      type: TaskType.VIDEO,
      completed: false,
      total: 1000,
      remaining: 200
    },
    {
      id: 2,
      title: "Дима Масленников",
      reward: 150,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.SUBSCRIBE,
      completed: false,
      total: 1000,
      remaining: 200
    },
    {
      id: 3,
      title: "Телеграм Димы Масленникова",
      reward: 25,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.TELEGRAM,
      completed: true,
      total: 1000,
      remaining: 200
    },
    {
      id: 4,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: false,
      total: 1000,
      remaining: 200
    },
    {
      id: 5,
      title: "Заголовок какого-то видоса",
      reward: 100,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: true,
      total: 1000,
      remaining: 200
    },
    {
      id: 6,
      title: "Заголовок какого-то видоса",
      reward: 50,
      url: "https://www.youtube.com/watch?v=daWCu1FqDaE",
      type: TaskType.VIDEO,
      completed: false,
      total: 1000,
      remaining: 200
    }
  ]
};

export function useTaskList(shouldGetCurrentTasks = false) {
  console.log(shouldGetCurrentTasks);
  const { data } = useTasksQuery(gqlClient, {
    sorting: { field: TTaskSortFields.Id, direction: TSortDirection.Desc },
    paging: { limit: 15, offset: 0 },
    filter: {}
  });

  console.log("tasks", data?.tasks.nodes);
  // TODO: реализация запроса списка задач
  // shouldGetCurrentTasks ? request created tasks : request all tasks
  return mock;
}
