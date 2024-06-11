import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slices/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
	const dispatch = useDispatch();

	//Subscribing
	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const timerId = setInterval(() => {
			//API POLLING => getting live data after a short interval
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeid(20) + "🚀",
				})
			);
		}, 500);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div className="border overflow-y-scroll border-black ml-2 p-2 w-full h-[600px] rounded-lg bg-slate-100 flex flex-col-reverse">
			{chatMessages.map((c, i) => (
				<ChatMessage key={i} name={c.name} message={c.message} />
			))}
		</div>
	);
};

export default LiveChat;
