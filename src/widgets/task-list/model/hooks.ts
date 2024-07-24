import { TSortDirection, TTaskSortFields, useTasksQuery } from "@/shared/generated";
import { gqlClient } from "@/shared/providers/GraphqlClient";

export function useTaskList(shouldGetCurrentTasks = false) {
  console.log(shouldGetCurrentTasks);
  const { data } = useTasksQuery(gqlClient, {
    sorting: { field: TTaskSortFields.Id, direction: TSortDirection.Desc },
    paging: { limit: 15, offset: 0 },
    filter: {}
  });

  return { tasks: data?.tasks.nodes };
}
