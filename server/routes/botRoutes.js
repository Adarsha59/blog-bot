// // Import dotenv to load environment variables
// // require("dotenv").config();

// // Import Google Generative AI library
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Use the API key from the environment variable
// // const apiKey = process.env.API_KEY;

// // Initialize the generative AI instance with the API key
// const genAI = new GoogleGenerativeAI("AIzaSyCZyd1oLA4G-QxupFVyJJ3lwD8qqs7rUuA"); // Correct instantiation with an object

// // Get the generative model (ensure model name is correct)
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// // Generate content from the model
// const generateContent = async () => {
//   try {
//     const result = await model.generateContent(prompt);
//     const content = result.response.text(); // Access text property correctly
//     console.log("all", content); // Log the response
//     return content; // Return the content
//   } catch (error) {
//     console.error("Error generating content:", error);
//     throw error; // Rethrow the error for proper error handling in the calling code
//   }
// };

// // Save the generated content to a file (if needed) or export the function
// module.exports = { generateContent };

// // Import dotenv to load environment variables
// // require("dotenv").config();

// // Import Google Generative AI library
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Use the API key from the environment variable
// // const apiKey = process.env.API_KEY;

// // Initialize the generative AI instance with the API key
// const genAI = new GoogleGenerativeAI("AIzaSyCZyd1oLA4G-QxupFVyJJ3lwD8qqs7rUuA"); // Correct instantiation with an object

// // Get the generative model (ensure model name is correct)
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const categories = [
//   "Programming",
//   "Technology",
//   "Design",
//   "AI",
//   "ML",
//   "Education",
//   "Photography",
//   "Music",
//   "Travel",
//   "Gaming",
//   "Film",
//   "Food",
//   "Fitness",
//   "Health",
//   "Shopping",
//   "Nature",
//   "Automotive",
//   "Home",
//   "Aviation",
//   "Pets",
//   "Pet Care",
//   "Nutrition",
//   "Science",
//   "Research",
//   "Academia",
//   "Business",
//   "Finance",
//   "Law",
//   "Justice",
//   "Medicine",
//   "Security",
// ];
// // Generate a blog post for the topic '${category}'
// // Function to generate content for a given category (like "game")
// const generateBlogPost = async (category) => {
//   try {
//     // Generate the prompt for the current category
//     const prompt = `
//     Generate a blog post for a topic  from the following list(choose any randomly): ${categories.join(
//       ", "
//     )}that includes a
//     title: (title of blog), and below it
//     description: (short berif of blog), and below it
//     Content:(full content of blog in html format with tailwind css only contnet in html other are not),
//     i want title and description to be plain text and content in html format
//     `;

//     // Get the model's response for the current prompt
//     const result = await model.generateContent(prompt);
//     const content = result.response.text(); // Access text property correctly

//     // Assuming the response includes the title, description, and content in a structured format
//     // Example structure expected:
//     // Title: "The Evolution of Video Games"
//     // Description: "This blog post explores the history of video games."
//     // Content: "Video games began in the 1950s..."
//     console.log("out con", content);
//     // Structure the result into an object with title, description, and content
//     const blogPost = (() => {
//       // Define the patterns to search for specific sections (case-insensitive)
//       const titleMatch = content.match(/title:\s*(.+)/i); // Matches "Title:" case-insensitively
//       const descriptionMatch = content.match(/description:\s*(.+)/i); // Matches "Description:" case-insensitively
//       const contentMatch = content.match(/```\s*([\s\S]+)/i); // Matches "Content:" case-insensitively
//       //   const imageMatch = content.match(/image:\s*(.+)/i); // Matches "Description:" case-insensitively

//       // Extract values and fallback to an empty string if not found
//       return {
//         title: titleMatch ? titleMatch[1].trim() : "No Title Found",
//         description: descriptionMatch
//           ? descriptionMatch[1].trim()
//           : "No Description Found",
//         content: contentMatch ? contentMatch[0].trim() : "No Content Found",
//         // image: imageMatch ? imageMatch[1].trim() : "No Image Found",
//       };
//     })();

//     // console.log("Generated Blog Post:", blogPost); // Log the blog post with title, description, and content
//     return blogPost; // Return the blog post object
//   } catch (error) {
//     console.error("Error generating blog post:", error);
//     throw error; // Rethrow the error for proper error handling in the calling code
//   }
// };

// // Example usage:

// module.exports = { generateBlogPost };
