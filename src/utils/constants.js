const YOUTUBE_API_KEY = "AIzaSyBTSITRenj7dHt_RTsWGnIlFstrsrXNwNI";

export const YOUTUBE_VIDEOS_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=" +
	YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_URL =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
