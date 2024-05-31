import React from "react";

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, thumbnails, localized, publishedAt } = snippet;
	const { viewCount } = statistics;

	return (
		<div className="p-2 m-2 shadow-lg w-72 rounded-sm">
			<img
				className="rounded-lg"
				src={thumbnails?.medium?.url}
				alt="thumbnail"
			/>
			<h3 className="font-bold text-lg"> {localized?.title}</h3>
			<p className="font-semibold">{channelTitle}</p>
			<p>
				<span>{viewCount} views : </span>
				<span> {publishedAt}</span>
			</p>
		</div>
	);
};

export default VideoCard;
