const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Types ( this is the syntax for a comment in graphql)
  type Anime {
    id: Int!
    name: String!
    episodes: Int!
  }
  # Note : here u can use the custom types above which u have defined
  # Queries
  type Query {
    getAllAnimes: [An
    getAnimeById(id: Int!): [Anime!]!
    getAnimeByName(name: String!): [Anime!]!
  }
  # Mutations
  # and see here how we pass the params

  type Mutation { 
    createAnime(name:String!,episodes:Int!) : Anime!
  }
`;

module.exports = { typeDefs };
