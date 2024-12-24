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

// Generate a blog post for the topic '${category}'
// Function to generate content for a given category (like "game")
const generateBlogPost = async (randomCategory) => {
  try {
    console.log("tag", randomCategory);
    // Generate the prompt for the current category
    const prompt = `
     Generate a blog post for the topic: "${randomCategory}". The blog should include:
      - Title: (title of blog)
      - Description: (short brief of blog)
      - Content: (full content of blog in HTML format body only   styled with Tailwind CSS also include Create a responsive, structured layout using Tailwind CSS with a visually appealing headline, subheadings, and paragraphs, featuring a border-styled design (no background color),ncorporate both internal and external links, bullet points or numbered lists, and expert quotes to support the content with well-formatted code snippets with syntax highlighting,if table or charts is necessary then well-formatted data in tables or charts that adjust based on screen size,hover effects, transitions, interactive elements like expandable FAQs or accordions or card, advanced UI features such as glassmorphism, shadows, gradients, and animations, and interactive elements like buttons or links with smooth animations, all optimized for mobile, tablet, and desktop views and The content should be extensive, ranging from 1,000-1,500 words, covering a detailed and comprehensive topic. )
      Ensure title and description are plain text, and content is in valid HTML.
    `;

    // Get the model's response for the current prompt
    const result = await model.generateContent(prompt);
    const content = result.response.text(); // Access text property correctly

    // Assuming the response includes the title, description, and content in a structured format
    // Example structure expected:
    // Title: "The Evolution of Video Games"
    // Description: "This blog post explores the history of video games."
    // Content: "Video games began in the 1950s..."
    // console.log("out con", content);
    // Structure the result into an object with title, description, and content
    const blogPost = (() => {
      // Define the patterns to search for specific sections (case-insensitive)
      const titleMatch = content.match(/title:\s*(.+)/i); // Matches "Title:" case-insensitively
      const descriptionMatch = content.match(/description:\s*(.+)/i); // Matches "Description:" case-insensitively
      // const contentMatch = content.match(/```\s*([\s\S]+)/i); // Matches "Content:" case-insensitively
      const contentMatch = content.match(/```html\s*([\s\S]+?)```/i);
      //   const imageMatch = content.match(/image:\s*(.+)/i); // Matches "Description:" case-insensitively

      // Extract values and fallback to an empty string if not found
      return {
        title: titleMatch ? titleMatch[1].trim() : "No Title Found",
        description: descriptionMatch
          ? descriptionMatch[1].trim()
          : "No Description Found",
        content: contentMatch
          ? contentMatch[1]
              .replace(/\u003C/g, "<")
              .replace(/\u003E/g, ">")
              .trim()
          : "No Content Found",
      };
    })();

    // console.log("Generated Blog Post:", blogPost); // Log the blog post with title, description, and content
    return blogPost; // Return the blog post object
  } catch (error) {
    console.error("Error generating blog post:", error);
    throw error; // Rethrow the error for proper error handling in the calling code
  }
};

// Example usage:

module.exports = { generateBlogPost };
