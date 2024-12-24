const fetchImage = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=0NDs8UvyMmRT1sakkK5UgaY1Uv_uj5S3SuzBWl2Oz3M`
    );
    const data = await response.json();

    // Check if the response contains any results
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.full; // Return the first image URL
    } else {
      return null; // If no results, return null
    }
  } catch (error) {
    console.error("Error fetching image:", error.message);
    return null; // Return null in case of an error
  }
};

module.exports = { fetchImage };
