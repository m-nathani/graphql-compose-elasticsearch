import { Client } from 'elasticsearch';
import { esConfig } from '../config';

export const client = new Client(esConfig);