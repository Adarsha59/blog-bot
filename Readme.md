# Auto Blog Post Bot

This project is designed to automate the process of generating and posting blog articles at regular intervals. Using cron jobs, the bot fetches content and images from the Gemine API and Unsplash, respectively, then posts the generated blog data to `hamroblog.vercel.app`. This happens automatically every 2 minutes, without any manual intervention.

## Features

- **Automated Blog Post Creation**: The bot generates blog content automatically using the Gemine API for text generation.
- **Dynamic Image Fetching**: Each blog post is accompanied by a relevant image fetched from Unsplash based on the blog's category.
- **Cron Job Automation**: A cron job runs every 2 minutes to hit the API endpoint and post new blog content.
- **Seamless Integration**: Content and image are posted directly to `hamroblog.vercel.app`, ensuring a smooth workflow.

## Prerequisites

To run this project, you need the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- Access to the **Gemine API** for content generation
- Access to the **Unsplash API** for fetching images
- A running instance of your `hamroblog.vercel.app` to post the generated blogs

## Installation

1. **Clone the Repository**:
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Adarsha59/blog-bot.git
   cd blog-bot
   ```

# How It Works

## 1. Server Setup (index.js)

### Express.js Server:

The project uses Express.js to set up a server that listens on a specified port.

### API Routes:

- `/api/items`: A route for fetching items (optional based on your use case).
- `/api/post`: A route for creating and posting a new blog automatically using the Gemine API for content and Unsplash for images.

## 2. Blog Post Creation (postItems.js)

### Content Generation:

The bot generates blog content based on a random category selected from a predefined list of categories. This is done via the **Gemine API**, which returns a title, description, and body content.

### Image Fetching:

Once the content is generated, the bot fetches a relevant image from **Unsplash** using the category as a search keyword.

### Data Validation:

The bot checks that the generated data is complete (i.e., title, description, and content are not empty) before proceeding.

### Post Blog Data:

The final blog data is sent as a POST request to the configured `hamroblog.vercel.app` API.

## 3. Cron Job Automation

### Cron Job Setup:

A cron job is set to trigger every 2 minutes. This cron job automatically hits the `/api/post` route to generate and post a new blog post.

### Automatic Posting:

With each trigger, the bot fetches new content and images, and automatically posts them to your blog API.

## 4. Blog Post Structure

Each blog post includes:

- **Title**: A dynamically generated title.
- **Description**: A short description of the blog post.
- **Content**: The full body content of the blog post.
- **Author**: Fixed author name (Adarsha Paudyal in this case).
- **Tags**: Includes the category tag for relevance.
- **Image**: A relevant image fetched from Unsplash.
- **Author Image**: A fixed author image URL for consistency.

# Running the Project

## Start the Server:

To run the server, use the following command:

```bash
npm start
```

# Project Documentation

## Dependencies

- **axios**: For making HTTP requests to both the Gemine API and Unsplash API.
- **express**: A minimal web framework for handling HTTP requests.
- **node-cron**: A cron job library to schedule recurring tasks.
- **dotenv**: For managing environment variables.

## Troubleshooting

### Error: Failed to create blog post:

This could occur if the generated blog content is incomplete or if the external API (`hamroblog.vercel.app`) is down. Check that all fields in the generated blog data are properly populated.

### Cron Job Not Triggering:

If the cron job is not running, ensure that the server is running continuously. You can add additional logging inside the cron job to debug.

### API Keys:

Ensure that both the Gemine API key and Unsplash API key are correctly set up in your `.env` file.

## Testing

You can manually test the `/api/post` route using tools like Postman or your browser by hitting the URL:

The cron job will automatically hit the `/api/post` route every 2 minutes, so you can monitor your blog for new posts.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- **Gemine API**: For providing powerful content generation capabilities.
- **Unsplash API**: For offering a vast collection of high-quality images for free.
- **Express.js**: A fast and minimalist web framework for Node.js.
- **axios**: For making seamless HTTP requests to external APIs.
- **node-cron**: For scheduling tasks at fixed intervals.
