// api/blogPostCron.js
import { default as axios } from "axios";
require("dotenv").config();

export default async function handler(req, res) {
  const url = process.env.MYURL;

  try {
    console.log("Automated blog post creation started...");
    const response = await axios.get(`${url}/api/post`);
    console.log("Blog post created successfully", response.data);
    res.status(200).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error(
      "Error while creating blog post automatically:",
      error.message
    );
    res.status(500).json({ message: error.message });
  }
}
