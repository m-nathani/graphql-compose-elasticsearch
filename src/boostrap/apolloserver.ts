import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';

export default async (schema: GraphQLSchema) => {
    return new ApolloServer({
        introspection: true,
        playground: true,
        schema: schema,
        formatError: error => {
          // format and log error
          return error;
        },
        context: async ({ req, connection }) => {
            // context for the graphql
            return {req, connection};
          },
      });
}
