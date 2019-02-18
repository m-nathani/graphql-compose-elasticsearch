import { pingElasticsearch, elasticClient } from './elasticsearch';
import apolloServer from './apolloserver';
import { ApolloServer } from 'apollo-server-koa';
import schema from '../resolver';

export const bootstrap = async (): Promise<ApolloServer> => {
  try {
    // create connection with elasticsearch
    await pingElasticsearch(elasticClient);
    return await apolloServer(schema);
  } catch (err) {
    console.log('bootstrap error: ', err);
    throw err;
  }
};
