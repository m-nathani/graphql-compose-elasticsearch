import { pingElasticsearch, elasticClient } from './elasticsearch';
import graphqlApolloServer from './apolloserver';
import { ApolloServer as GraphqlApolloServer } from 'apollo-server-koa';
import schema from '../resolver';

export const bootstrap = async (): Promise<GraphqlApolloServer> => {
  try {
    // create connection with elasticsearch
    await pingElasticsearch(elasticClient);
    return await graphqlApolloServer(schema);
  } catch (err) {
    console.log('bootstrap error', err);
  }
};

