import { ValidationError } from 'apollo-server';

export const project = async (client) => {
    const response = {};

    try {
        response = client.get({
            index: 'projects_index_new',
            type: 'project',
            id: "010410100730"
        });
    } catch(err) {
        console.log('error in project fetch\n', err)
        throw ValidationError(err);
    }

    console.log(response);
    return response;
}