import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql `
mutation AddItem($itemPublisher: String!, $itemTitle: String!, $itemIssueTitle: String!, $itemIssueNumber: String!, $itemDescription: String, $itemCondition: String, $itemPrice: String, $itemImage: String, $username: String) {
  addItem(itemPublisher: $itemPublisher, itemTitle: $itemTitle, itemIssueTitle: $itemIssueTitle, itemIssueNumber: $itemIssueNumber, itemDescription: $itemDescription, itemCondition: $itemCondition, itemPrice: $itemPrice, itemImage: $itemImage, username: $username) {
    itemPublisher
    itemTitle
    itemIssueTitle
    itemIssueNumber
    itemDescription
    itemCondition
    itemPrice
    itemImage
    username
  }
}
`;