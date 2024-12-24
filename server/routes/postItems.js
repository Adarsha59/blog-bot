const { default: axios } = require("axios");
const express = require("express");
const { generateBlogPost } = require("../utils/generateContent");
const { fetchImage } = require("../utils/imageFetch");
const router = express.Router();
const categories = [
  "Programming",
  "Technology",
  "Design",
  "AI",
  "ML",
  "Education",
  "Photography",
  "Music",
  "Travel",
  "Gaming",
  "Film",
  "Food",
  "Fitness",
  "Health",
  "Shopping",
  "Nature",
  "Automotive",
  "Home",
  "Aviation",
  "Pets",
  "Pet Care",
  "Nutrition",
  "Science",
  "Research",
  "Academia",
  "Business",
  "Finance",
  "Law",
  "Justice",
  "Medicine",
  "Security",
];
const randomCategory =
  categories[Math.floor(Math.random() * categories.length)];

router.get("/", async (req, res) => {
  try {
    // Generate blog post data
    console.log("tag0", randomCategory);
    const image = await fetchImage(randomCategory);
    const data = await generateBlogPost(randomCategory);
    console.log("title", data.title);
    // Validate generated data
    if (!data.title || !data.description || !data.content) {
      return res.status(400).json({
        message: "Failed to create blog post",
        error: "Generated blog data is incomplete or invalid",
      });
    }

    // Construct blog post object
    const blogData = {
      title: data.title,
      description: data.description,
      content: data.content,
      author: "Adarsha Paudyal",
      status: "published",
      image: image, // Replace with a valid image URL
      tags: [randomCategory], // Ensure this matches the API's expected format
      author_image:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVluajhaTFhZelo2RmxxZE1qYUlQbTZVQWoifQ", // Replace with a valid author image URL
    };

    // Post blog data to the blog API
    const response = await axios.post(
      "https://hamroblog.vercel.app/api/blog/create",
      blogData
    );

    // Send success response
    res.status(200).json({
      message: "Blog post created successfully",
      data: response.data,
      hami: blogData,
    });
  } catch (error) {
    // Log the error and send a response
    console.error("Error creating blog post:", error.message);

    if (error.response) {
      // API responded with a status code other than 2xx
      return res.status(error.response.status).json({
        message: "Failed to create blog post",
        error: error.response.data || error.response.statusText,
      });
    }

    // Handle other errors (e.g., network issues)
    res.status(500).json({
      message: "Failed to create blog post",
      error: error.message,
    });
  }
});

module.exports = router;
