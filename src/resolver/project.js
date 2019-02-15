import { project } from '../model/project'

export default {
  Query: {
    project: async (_, {...args }, client) => {
      console.log(_, {arg}, client);
      return await project(client);
      // return { name: 'temo'}
    }
  },

  Mutation: {
  },

  Subscription: {
  }

};
