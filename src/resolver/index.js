import { GraphQLDateTime } from 'graphql-iso-date';

import projectResolvers from './project';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  projectResolvers,
];
