import 'dotenv/config';
import * as koa from 'koa';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import * as winston from 'winston';
import { logger } from './logging';
import { port, host } from '../config';
import { bootstrap } from './boostrap';

bootstrap().then((apolloServer) => {
  const app = new koa();
  // Provides important security headers to make your app more secure
  app.use(helmet());
  // Enable cors with default options
  app.use(cors());
  // Logger middleware -> use winston as logger (logging.ts with config)
  app.use(logger(winston));

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server ready at http://${host}:${port}${apolloServer.graphqlPath}`);
  });
});
