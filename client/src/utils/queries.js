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