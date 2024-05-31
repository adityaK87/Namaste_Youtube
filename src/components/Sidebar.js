import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="w-1/5 bg-slate-300 p-4 ">
			<ul>
				<Link className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Home
				</Link>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Subscriptions
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					History
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Playlists
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Watch Later
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Watch Later
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Watch Later
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Watch Later
				</li>
				<li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
					Watch Later
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
