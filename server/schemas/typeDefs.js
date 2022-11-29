const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    music: [Music]!
  }

  type Music {
    _id: ID
    url: String
    genre: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    music: [Music]
  }

`;

module.exports = typeDefs;