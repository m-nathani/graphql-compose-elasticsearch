import 'dotenv/config';
import koa from 'koa';
import {
  ApolloServer,
} from 'apollo-server-koa';

import schema from './schema';
import resolvers from './resolver';
import { client } from './elasticsearch';

const app = new koa();

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // format and log error
    return error;
  },
  context: async ({ req, connection }) => {
      return {
        client
      };
    },
});

server.applyMiddleware({ app });

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
  console.log(`Server ready at http://${host}:${port}${server.graphqlPath}`)
});
