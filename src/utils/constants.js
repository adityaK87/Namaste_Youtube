const YOUTUBE_API_KEY = "AIzaSyAeKrVQEmIeztbeAOGhmJiz98Cy2URetMc";

export const YOUTUBE_VIDEOS_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=" +
	YOUTUBE_API_KEY;

export const YOUTUBE_LIVECHAT_COUNT = 10;

export const YOUTUBE_SEARCH_SUGGESTIONS_URL =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENT_DATA = [
	{
		name: "Aditya",
		text: "lorem ipsum dolor sit amet, con",
		replies: [
			{
				name: "Aditya",
				text: "lorem ipsum dolor sit amet, con",
				replies: [],
			},
			{
				name: "Aditya",
				text: "lorem ipsum dolor sit amet, con",
				replies: [
					{
						name: "Aditya",
						text: "lorem ipsum dolor sit amet, con",
						replies: [],
					},
				],
			},
		],
	},
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
	{ name: "Aditya", text: "lorem ipsum dolor sit amet, con", replies: [] },
];
