import { useUser } from "@/entities/user/model";
import { TSortDirection, TTaskSortFields, useTasksQuery } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";

export function useTaskList(shouldGetCurrentTasks = false) {
  console.log(shouldGetCurrentTasks);
  const user = useUser();
  const completedTasksIds =
    user?.completedTasks?.map((completed) => Number(completed.taskId)) ?? [];

  const { data, isLoading } = useTasksQuery(
    gqlClient,
    {
      sorting: { field: TTaskSortFields.Id, direction: TSortDirection.Desc },
      paging: { limit: 15, offset: 0 },
      filter: {
        id: completedTasksIds.length !== 0 ? { notIn: completedTasksIds } : undefined,
        remaining: { neq: 0 }
      }
    },
    {
      keepPreviousData: true
    }
  );

  return { tasks: data?.tasks.nodes, isLoading };
}
