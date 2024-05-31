import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
	const isSidebarOpen = useSelector((state) => state.app.isSidebarOpen);

	return (
		<div className="flex py-4">
			{isSidebarOpen && <Sidebar />}
			<Outlet />
		</div>
	);
};

export default Body;
