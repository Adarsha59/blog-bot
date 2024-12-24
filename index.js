const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cron = require("node-cron");
// Middleware for parsing JSON request bodies
app.use(express.json());
// Import routes
const getItems = require("./server/routes/getItems");
const postItems = require("./server/routes/postItems");
const { default: axios } = require("axios");
// Mount routes
app.use("/api/items", getItems);
app.use("/api/post", postItems);
app.get("/", (req, res) => {
  res.status(200).send("Success");
});
const url = process.env.MYURL;
cron.schedule("*/1 * * * *", async () => {
  try {
    console.log("Automated blog post creation started...");
    const response = await axios.get(`${url}/api/post`);
    console.log("Blog post created successfully", response.data);
  } catch (error) {
    console.error(
      "Error while creating blog post automatically:",
      error.message
    );
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
