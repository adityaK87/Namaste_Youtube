import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideo();
	}, []);

	const getVideo = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API_URL);
		const json = await data.json();
		setVideos(json.items);
	};
	return (
		<div className="flex flex-wrap p-2 ">
			{videos?.map((video) => (
				<Link to={"/watch?v=" + video.id} key={video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
