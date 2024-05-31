import React from "react";
import Button from "./Button";

const buttonList = [
	"All",
	"Music",
	"Movies",
	"Books",
	"Coding",
	"Programming",
	"JavaScript",
	"T-series",
];

const ButtonList = () => {
	return (
		<div>
			{buttonList.map((button) => (
				<Button name={button} key={button} />
			))}
		</div>
	);
};

export default ButtonList;
