const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  GOOGLE_API_KEY;

export const VIDEO_INFO =
  "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDOw2x1wNwuU9PdYi3ij5Eoc0C-UpsakcU&maxResults=50&part=snippet&id=";
