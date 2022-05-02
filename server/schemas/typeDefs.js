const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type User {
    _id: ID
    username: String
    email: String
    items: [Item]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    items(username: String): [Item]
    item(_id: ID!): Item
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Item {
    _id: ID
    itemText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemText: String!): Item
    addReaction(itemId: ID!, reactionBody: String!): Item
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;