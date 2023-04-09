// export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_API_KEY = "AIzaSyCkgq8eqpICtoav7WN2ySfFe6XWNJ_YWkY";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  GOOGLE_API_KEY;

export const VIDEO_INFO =
  "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDOw2x1wNwuU9PdYi3ij5Eoc0C-UpsakcU&maxResults=50&part=snippet&id=";

export const SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
