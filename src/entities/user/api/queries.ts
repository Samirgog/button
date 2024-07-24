import { gql } from "graphql-request";

export const UserFragment = gql`
  fragment userFields on User {
    id
    name
    earned
    balance
    completedTasks {
      id
      taskId
    }
    referrals {
      id
      name
    }
  }
`;

gql`
  ${UserFragment}

  mutation Auth($input: AuthInput!) {
    auth(input: $input) {
      ...userFields
    }
  }
`;

gql`
  ${UserFragment}

  query User($userId: Int!) {
    user(id: $userId) {
      ...userFields
    }
  }
`;
