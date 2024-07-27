import { gql } from "graphql-request";

export const UserFragment = gql`
  fragment userFields on User {
    id
    telegramId
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
    lastPlayedGoldenRain
  }
`;

gql`
  mutation Auth($input: AuthInput!) {
    auth(input: $input) {
      id
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

gql`
  mutation ClaimGoldenRain($claimGoldenRainId: Int!, $score: Int!) {
    claimGoldenRain(id: $claimGoldenRainId, score: $score) {
      id
    }
  }
`;
