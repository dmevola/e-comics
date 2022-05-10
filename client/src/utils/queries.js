import { gql } from '@apollo/client';


export const QUERY_ITEMS = gql`
query items {
    items {
        _id
        itemPublisher
        itemTitle
        itemIssueTitle
        itemIssueNumber
        itemDescription
        itemCondition
        itemPrice
        itemImage
        createdAt
        username
    }
}
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;


export const QUERY_USER = gql`
query ItemsByUser($username: String!) {
  itemsByUser(username: $username) {
    itemPublisher
    itemTitle
    itemIssueTitle
    itemDescription
    itemIssueNumber
    itemCondition
    itemPrice
    itemStatus
    itemImage
    createdAt
    username
  }
}
`;
=======

