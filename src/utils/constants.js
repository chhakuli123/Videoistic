// export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// Define a constant variable to store the Google API key
export const GOOGLE_API_KEY = "AIzaSyCkgq8eqpICtoav7WN2ySfFe6XWNJ_YWkY";

// Define a constant variable for the YouTube API endpoint for retrieving popular videos
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  GOOGLE_API_KEY;

// Define a constant variable for the YouTube API endpoint for retrieving video information by ID
export const VIDEO_INFO =
  "https://www.googleapis.com/youtube/v3/videos?key=" +
  GOOGLE_API_KEY +
  "&maxResults=50&part=snippet&id=";

// Define a constant variable for the Google search suggestions API endpoint
export const SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Define a constant variable for the Google search API endpoint
export const SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
