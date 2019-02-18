import { Client } from 'elasticsearch';
import { esConfig } from '../../config';

export const elasticSearchConnection = () => {
    // Get connection options from env variable
    return new Client(esConfig);
};

export const pingElasticsearch = async (client: Client) => {
    return client.ping({
        requestTimeout: 3000,
    });
};

export const elasticClient = elasticSearchConnection();
