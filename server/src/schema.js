const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {    
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Module {
    id: ID!
    title: String!
    length: Int!
  }

  type Track {
    id: ID!    
    title: String!    
    author: Author!    
    thumbnail: String    
    length: Int    
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }  

  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
