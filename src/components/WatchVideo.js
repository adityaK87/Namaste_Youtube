import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
	const dispatch = useDispatch();
	const [videoId] = useSearchParams();
	const id = videoId.get("v");

	useEffect(() => {
		dispatch(closeSidebar());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="flex flex-col w-full mx-2">
			<div className="flex">
				<div>
					<iframe
						width="1000"
						height="600"
						src={"https://www.youtube.com/embed/" + id}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen></iframe>
				</div>
				<div className="w-full flex flex-col-reverse">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchVideo;
