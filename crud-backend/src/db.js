/** @format */

// src/db.js

// This is the most important line: it directly loads and configures dotenv.
import "dotenv/config";

// Import the pg library to interact with PostgreSQL
import pg from "pg";

// Create a new client instance with credentials from the .env file
// This will now work because 'dotenv/config' has loaded the variables.
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Establish the connection to the database
db.connect();

// Export a query function that uses our connected client to run queries
export const query = (text, params) => db.query(text, params);
