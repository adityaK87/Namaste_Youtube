import React, { useEffect, useState } from "react";

import hamburger from "../assets/hamburger.png";
import searchLogo from "../assets/magnifying-glass.png";
import user from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_URL } from "../utils/constants";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, searchSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		//DEBOUNCING
		// API Call
		// make an API call after every key press
		//but if the difference between 2 key press is < 200ms the DECLINE the Api call
		const timerId = setTimeout(() => {
			getSearchSuggestions();
		}, 200);

		return () => {
			clearTimeout(timerId);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_URL + searchQuery);
		const json = await data.json();
		searchSuggestions(json[1]);
	};

	return (
		<div className="p-4 flex justify-between shadow-lg">
			{/*Left nav  */}
			<div className="flex">
				<img
					onClick={() => dispatch(toggleSidebar())}
					className="px-2 h-8 cursor-pointer"
					src={hamburger}
					alt="Hamburger"
				/>
				<a href="/">
					<img
						className="h-8 px-2"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
						alt=""
					/>
				</a>
			</div>
			{/* middle nav=> Search Box */}
			<div>
				<div className="flex">
					<input
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						type="text"
						placeholder="Search"
						onBlur={() => setShowSuggestions(false)}
						onFocus={() => setShowSuggestions(true)}
						className=" border border-1 rounded-l-full border-black px-5 py-2"
					/>
					<button className="py-2 px-5 rounded-r-full border border-1 border-black bg-gray-200">
						<img className="h-5" src={searchLogo} alt="🔍" />
					</button>
				</div>

				{showSuggestions && (
					<div className="absolute shadow-lg bg-white py-2 px-5 w-72 rounded-md">
						<ul>
							{suggestions.map((suggestion) => (
								<li className="py-2 shadow-sm hover:bg-gray-100">
									🔍 {suggestion}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			{/* user  */}
			<div>
				<img src={user} alt="" className="h-8" />
			</div>
		</div>
	);
};

export default Header;
