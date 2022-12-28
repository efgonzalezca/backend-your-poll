/* Development environment */
import dotenv from 'dotenv';
dotenv.config();

import config from './config';

import { startServer } from './loaders';

startServer(config.environment);