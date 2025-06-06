/** @format */
import { query } from "../db.js";

// Define and export a service function to get all clients
export const getAllClients = async () => {
  // execute a SQL query to select all clients
  const { rows } = await query("SELECT * FROM clients_tb");

  // return the rows from the query result
  return rows;
};

export const createClient = async (clientData) => {
  const { name, email, job, rate, isactive } = clientData;
  const values = [name, email, job, rate, isactive];
  const createSQLQuery = `
    INSERT INTO clients_tb (name, email, job, rate, isactive) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *`;
  const { rows } = await query(createSQLQuery, values);
  return rows[0];
};

export const updateClient = async (id, clientData) => {
  const { name, email, job, rate, isactive } = clientData;
  const { rows } = await query(
    `
        UPDATE clients_tb SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 
        WHERE id = $6 
        RETURNING *`,
    [name, email, job, rate, isactive, id]
  );
  return rows[0];
};

export const deleteClient = async (id) => {
  const { rowCount } = await query(
    `
        DELETE FROM clients_tb 
        WHERE id = $1`,
    [id]
  );
  return rowCount > 0; // Return true if a row was deleted, false otherwise
};

export const searchClients = async (searchTerm) => {
  const { rows } = await query(
    `
            SELECT * 
            FROM clients_tb 
            WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`,
    [`%${searchTerm}%`]
  );
  return rows;
};
