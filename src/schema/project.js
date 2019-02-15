import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    project: Project
  }

  type Project {
    name: String
  }
`;
