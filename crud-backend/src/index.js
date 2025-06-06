/** @format */

// Import the main express library
import express from "express";
// Import the cors middleware to allow cross-origin requests
import cors from "cors";

// Import our client-specific routes
import clientRoutes from "./routes/clientRoute.js";

// Create an instance of the Express application
const app = express();
// Define the port the server will run on
const port = 5000;

// --- Middleware Setup ---
// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());
// Enable the express.json middleware to parse JSON request bodies
app.use(express.json());

// --- Route Mounting ---
// Mount the client routes on the '/api/clients' path
app.use("/api/", clientRoutes);

// Start the server and listen for incoming connections on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
