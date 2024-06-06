import React from "react";
import { COMMENT_DATA } from "../utils/constants";
import userImg from "../assets/user.png";

const Comment = ({ data }) => {
	const { name, text } = data;
	return (
		<div className="flex gap-3 bg-gray-100 p-2 rounded-md my-2">
			<img className="w-8 h-8" src={userImg} alt="User" />
			<div>
				<p>{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsList = ({ comments }) =>
	comments.map((comment, index) => (
		<div>
			<Comment data={comment} key={index} />
			<div className="pl-5 border border-l-black ml-5">
				{/* Recursion : calling itself inside his body */}
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));

const CommentsContainer = () => {
	return (
		<div className="m-5 p-2">
			<h1 className="text-2xl font-bold ">Comments:</h1>
			<CommentsList comments={COMMENT_DATA} />
		</div>
	);
};

export default CommentsContainer;
