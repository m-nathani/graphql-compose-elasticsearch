import { ProjectTC } from '../schema/project';
import { schemaComposer } from 'graphql-compose';
import { projectService } from '../api';

ProjectTC.addResolver({
  name: 'addProject',
  kind: 'mutation',
  type: 'JSON',
  args: {
    id: 'String!',
    tag: 'String!',
    data: 'JSON',
  },
  resolve: ({ args }) => {
    // call mutations here
    projectService.createProject(args.data);
  },
});

ProjectTC.addResolver({
  name: 'updateProject',
  kind: 'mutation',
  type: 'JSON',
  args: {
    id: 'String!',
    tag: 'String!',
  },
  resolve: ({ args }) => {
    // call mutations here
    console.log('in update project mutation ')
  },
});


schemaComposer.Query.addFields({
  // add field with regular FieldConfig
  currentTime: {
    type: 'Date',
    resolve: () => Date.now(),
  },
  project: ProjectTC.getResolver('search').getFieldConfig(),
  projectPagination: ProjectTC.getResolver('searchPagination').getFieldConfig(),
  projectConnection: ProjectTC.getResolver('searchConnection').getFieldConfig(),
  // ...
});

schemaComposer.Mutation.addNestedFields({
  'project.create': ProjectTC.getResolver('addProject'),
  'project.update': ProjectTC.getResolver('updateProject'),
});

export default schemaComposer.buildSchema();