import { ConfigOptions }  from 'elasticsearch';

export const port = process.env.PORT || 3000;
export const host = process.env.HOST || 'localhost';
export const debugLogging = process.env.LOGGING ||  false;
export const esConfig: ConfigOptions = {
    host:  process.env.ESHOST || '80.227.48.78:9200',
    log:  process.env.ES_LOGGING || 'trace'
}

export const PROJECT_SERVICE_HOST = process.env.PROJECT_SERVICE_HOST ||  'http://localhost:3001';