import { gql } from "graphql-request";

gql`
  mutation Auth($input: AuthInput!) {
    auth(input: $input) {
      id
      name
      earned
      balance
      completedTasks {
        id
        task {
          name
        }
      }
      referrals {
        id
        name
      }
    }
  }
`;
