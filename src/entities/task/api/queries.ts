import { gql } from "graphql-request";

gql`
  query Tasks($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!) {
    tasks(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      nodes {
        id
        name
        remaining
        reward
        total
        type
        url
        priority
      }
    }
  }
`;

gql`
  mutation CompleteTask($completeTaskId: Int!, $userId: Int!) {
    completeTask(id: $completeTaskId, userId: $userId) {
      id
      remaining
      reward
    }
  }
`;
