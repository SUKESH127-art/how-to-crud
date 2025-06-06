/** @format */
import * as clientService from "../services/clientService.js";

// define controller function
export const getClients = async (req, res) => {
  try {
    // call the service function to get all clients
    const clients = await clientService.getAllClients();
    // send the clients as a JSON response
    res.status(200).json(clients);
  } catch (error) {
    // handle any errors that occur during the process
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    // call the service function to create a new client with the data from the request body
    const newClient = await clientService.createClient(clientData);
    // send the newly created client as a JSON response
    res.status(201).json(newClient);
  } catch (error) {
    // handle any errors that occur during the process
    console.error("Error creating client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const id = req.params.id; // get the client ID from the request parameters
    const clientData = req.body; // get the updated client data from the request body
    // call the service function to update the client with the given ID
    const updatedClient = await clientService.updateClient(id, clientData);
    if (!updatedClient) {
      // if no client was found with the given ID, return a 404 error
      return res.status(404).json({ error: "Client not found" });
    }
    // send the updated client as a JSON response
    res.status(202).json(updatedClient);
  } catch (error) {
    // handle any errors that occur during the process
    console.error("Error updating client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id; // get the client ID from the request parameters
    // call the service function to delete the client with the given ID
    const deleted = await clientService.deleteClient(id);
    if (!deleted) {
      // if no client was found with the given ID, return a 404 error
      return res.status(404).json({ error: "Client not found" });
    }
    // send a success message as a JSON response
    res.status(204).send(); // 204 No Content
  } catch (error) {
    // handle any errors that occur during the process
    console.error("Error deleting client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const searchClients = async (req, res) => {
  try {
    const searchTerm = req.query.q; // get the search term from the query parameters
    if (!searchTerm) {
      return res.status(400).json({ error: "Search term is required" });
    }
    // call the service function to search for clients matching the search term
    const clients = await clientService.searchClients(searchTerm);
    // send the found clients as a JSON response
    res.status(200).json(clients);
  } catch (error) {
    // handle any errors that occur during the process
    console.error("Error searching clients:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
