// Import dotenv to load environment variables
// require("dotenv").config();

// Import Google Generative AI library
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Use the API key from the environment variable
// const apiKey = process.env.API_KEY;

// Initialize the generative AI instance with the API key
const genAI = new GoogleGenerativeAI("AIzaSyCZyd1oLA4G-QxupFVyJJ3lwD8qqs7rUuA"); // Correct instantiation with an object

// Get the generative model (ensure model name is correct)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

// Generate content from the model
const generateContent = async () => {
  try {
    const result = await model.generateContent(prompt);
    const content = result.response.text(); // Access text property correctly
    console.log("all", content); // Log the response
    return content; // Return the content
  } catch (error) {
    console.error("Error generating content:", error);
    throw error; // Rethrow the error for proper error handling in the calling code
  }
};

// Save the generated content to a file (if needed) or export the function
module.exports = { generateContent };
