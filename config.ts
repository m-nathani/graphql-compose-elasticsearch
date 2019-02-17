import { ConfigOptions }  from 'elasticsearch';

export const port = process.env.PORT || 3000;
export const host = process.env.HOST || 'localhost';
export const debugLogging = process.env.DEBUG_LOGLEVEL || false;

export const esConfig: ConfigOptions = {
    host: process.env.ESHOST || '80.227.48.78:9200',
    log: process.env.ES_LOGGING || 'trace',
    // apiVersion: process.env.ES_API_VERSION || '1.7'
};

export const PROJECT_SERVICE_HOST = process.env.PROJECT_SERVICE_HOST ||  'http://localhost:3001';