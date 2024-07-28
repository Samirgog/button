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
  mutation ClaimGoldenRain($userId: Int!, $score: Int!) {
    claimGoldenRain(userId: $userId, score: $score) {
      id
    }
  }
`;

gql`
  mutation SetGoldenRainTimestamp($userId: Int!) {
    setGoldenRainTimestamp(userId: $userId) {
      id
    }
  }
`;
