import 'dotenv/config';
import * as koa from 'koa';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import * as winston from 'winston';
import {
  ApolloServer,
} from 'apollo-server-koa';
import { logger } from './logging';
import schema from './resolver';
import { client } from './elasticsearch';
import { port, host } from '../config';

const app = new koa();

// Provides important security headers to make your app more secure
app.use(helmet());
// Enable cors with default options
app.use(cors());
// Logger middleware -> use winston as logger (logging.ts with config)
app.use(logger(winston));

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema: schema,
  formatError: error => {
    // format and log error
    return error;
  },
  context: async ({ req, connection }) => {
      return {
        client: client
      };
    },
});

server.applyMiddleware({ app });
app.listen(port, () => {
  console.log(`Server ready at http://${host}:${port}${server.graphqlPath}`)
});
