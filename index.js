const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Import routes
const getItems = require("./server/routes/getItems");

// Mount routes
app.use("/api/items", getItems);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
