import React from "react";
import userLogo from "../assets/user.png";

const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center gap-2 p-2 shadow-lg my-2">
			<img src={userLogo} className="w-8 h-8" alt="" />
			<span className="font-bold">{name}</span>
			<span>{message}</span>
		</div>
	);
};

export default ChatMessage;
