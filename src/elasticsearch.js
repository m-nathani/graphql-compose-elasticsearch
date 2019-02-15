import elasticsearch from "elasticsearch";

export const client = new elasticsearch.Client({
  host: '80.227.48.78:9200',
  log: 'trace'
});