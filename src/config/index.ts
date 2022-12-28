import { config } from 'dotenv';
import { environment } from '../types/index';

const envFound = config();

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  api: {
    prefix: '/api/v1',
  },
  environment: <environment>process.env.NODE_ENV || 'development',
  logFile: process.env.LOG_FILE || `${ __dirname }/../../logs/debug.log`,
  port: process.env.PORT || '4500'
}