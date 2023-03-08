const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/resolvers");

require("colors");

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  // Await for the server to start
  await server.start();

  // Apply the Apollo middleware to the Express app
  server.applyMiddleware({ app });
  //
  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`Server is Running in port 4000`.magenta)
  );
}

startServer();
