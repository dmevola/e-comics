import { gql } from '@apollo/client';


export const QUERY_ITEM = gql`
query items($id: ID!) {
    item(_id: $id) {
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
`

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
