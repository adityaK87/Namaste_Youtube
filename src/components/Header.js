import React from "react";

import hamburger from "../assets/hamburger.png";
import searchLogo from "../assets/magnifying-glass.png";
import user from "../assets/user.png";

const Header = () => {
	return (
		<div className="p-4 flex justify-between shadow-lg">
			{/*Left nav  */}
			<div className="flex">
				<img
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
			<div className="flex">
				<input
					type="text"
					placeholder="Search"
					className=" border border-1 rounded-l-full border-black px-10 py-2"
				/>
				<button className="py-2 px-5 rounded-r-full border border-1 border-black bg-gray-200">
					<img className="h-5" src={searchLogo} alt="🔍" />
				</button>
			</div>

			{/* user  */}
			<div>
				<img src={user} alt="" className="h-8" />
			</div>
		</div>
	);
};

export default Header;
