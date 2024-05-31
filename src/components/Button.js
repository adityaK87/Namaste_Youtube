import React from "react";

const Button = ({ name }) => {
	return (
		<button className="py-1 my-1 px-3 bg-gray-200 hover:bg-gray-400 border border-1 border-black rounded-md mx-2">
			{name}
		</button>
	);
};

export default Button;
