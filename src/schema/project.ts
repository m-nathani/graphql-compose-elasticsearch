import { composeWithElastic } from 'graphql-compose-elasticsearch';
import { client } from '../elasticsearch';
import { PROJECT_INDEX, PROJECT_TYPE } from '../constant';

const mapping = {
  properties: {
    createdAt: {
      type: 'date'
    },
    id: { type: 'string', index: 'not_analyzed' },
    scopeOfWork: {
      properties: {
        attribute: { type: 'string' },
        id: { type: 'string', index: 'not_analyzed' },
        isActive: { type: 'boolean' }
      }
    }
  },
};

export const ProjectTC = composeWithElastic({
  graphqlTypeName: 'ProjectES',
  elasticIndex: PROJECT_INDEX,
  elasticType: PROJECT_TYPE,
  elasticMapping: mapping,
  elasticClient: client,
  // elastic mapping does not contain information about is fields are arrays or not
  // so provide this information explicitly for obtaining correct types in GraphQL
});