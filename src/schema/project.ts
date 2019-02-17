import { composeWithElastic } from 'graphql-compose-elasticsearch';
import { client } from '../elasticsearch';

const mapping = {
  properties: {
    createdAt: {
      type: 'date'
    },
    id: { type: "string", index: "not_analyzed" },
    scopeOfWork: {
      properties: {
        attribute:{ type: "string" },
        id:{ type: "string", index: "not_analyzed" },
        isActive: { type: "boolean" }
      }
    }
  },
};

export const ProjectTC = composeWithElastic({
  graphqlTypeName: 'ProjectES',
  elasticIndex: 'projects_index_new',
  elasticType: 'project',
  elasticMapping: mapping,
  elasticClient: client,
  // elastic mapping does not contain information about is fields are arrays or not
  // so provide this information explicitly for obtaining correct types in GraphQL
});