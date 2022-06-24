import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core';
import express from 'express';
import http from 'http';

dotenv.config();

export async function startApolloServer(typeDefs, resolvers) {
  const port = process.env.PORT || 3000;
  const app = express();

  app.get('/', (req, res) => res.redirect('/graphql'));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === 'production' && ApolloServerPluginLandingPageGraphQLPlayground(),
    ].filter(Boolean),
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
