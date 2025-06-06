/** @format */

// Import the Router functionality from the Express library
import express from "express";

// Import the controller functions we need for our routes
import * as clientController from "../controllers/clientController.js";

// Create a new router instance
const router = express.Router();

// Define the route for GET requests to the root of this router

// This will trigger the getClients function in our controller
router.get("/clients", clientController.getClients);

// create a new client
router.post("/clients", clientController.createClient);

// update client
router.put("/clients/:id", clientController.updateClient);

// delete a client
router.delete("/clients/:id", clientController.deleteClient);

// search a client
router.get("/clients/search", clientController.searchClients);

// Export the router so it can be used in our main server file
export default router;
