"use strict";
import { config } from './dist/db/connection';
import Server from './dist/models/servers';

// Load environment variables from .env file
config();

const server = new Server();

// Export the server as a module
export default server;

