import { Server as HTTPServer } from 'http';
import express, { Application } from 'express';

import config from '../config';
import { logger } from '../utils';
import { environment } from '../types';
import { expressLoader } from './express.loader';

export const createApp = async (app: Application) => {
  await expressLoader(app);
  logger.info('Express loaded');
}

//TODO: modify function to accept an config object per environment
export const startServer = (environment: environment) => {
  //TODO: create default configurations per environment
  const configEnvironment = {
    development: {mongodb: 'mongodb://localhost:27017', dbName: 'test'},
    production: {mongodb: 'mongodb://localhost:27017', dbName: 'production'},
    test: {mongodb: 'mongodb://localhost:27017', dbName: 'test'}
  }

  const database = configEnvironment[environment].mongodb
  console.log(database)
  
  //TODO: connect to database with mongoose(create loader)

  const app: Application = express();
  createApp(app);

  const httpServer: HTTPServer = new HTTPServer(app);

  //TODO: add socket.io server(create loader)

  httpServer.listen(config.port, () => {
    console.log(`Server running on: http://localhost:${config.port}`);
    logger.info('HTTP server connected');
  })
  .on('error', (err) => {
    logger.error('Connection failed', err.message);
    process.exit(1);
  })
}