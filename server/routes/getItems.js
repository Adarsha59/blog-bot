const express = require("express");
const { generateBlogPost } = require("../utils/generateContent");
const router = express.Router();

// In-memory data (mock database)
let items = [
  { id: 1, name: "Item 1", description: "This is the first item" },
  { id: 2, name: "Item 2", description: "This is the second item" },
];

// GET route for fetching items
router.get("/", async (req, res) => {
  try {
    // const items = await axios.get("https://hamroblog.vercel.app/api/blog/read");
    const data = await generateBlogPost();
    //  const {
    //     description,
    //     category,
    //     content,
    //     image}
    // Return the generated blog post
    res.json(data);
    console.log("object returned", data);
    // res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error.message);
    res.status(500).json({ message: "Error fetching items" });
  }
});

module.exports = router; // Export the router
