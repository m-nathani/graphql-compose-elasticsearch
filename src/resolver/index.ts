import { mergeSchemas } from 'graphql-tools';
import projectResolvers from './project';

export default mergeSchemas({
  schemas: [
    projectResolvers
  ]
});
