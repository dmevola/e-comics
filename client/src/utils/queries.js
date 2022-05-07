import { gql } from '@apollo/client';

export const QUERY_ME = gql `
  {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_ME_BASIC = gql `
  {
    me {
      _id
      username
      email
    }
  }
`;

export const Query_items = gql `
query Query {
  items {
    _id
    itemTitle
    itemIssueTitle
    username
    itemPublisher
    itemIssueNumber
    itemDescription
    itemCondition
    itemImage
    itemPrice
    createdAt
  }
}


`;