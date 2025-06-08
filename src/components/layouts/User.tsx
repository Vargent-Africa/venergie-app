import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
	return (
		<main className="flex-1 pb-16">
			<section>
				<Outlet />
			</section>
		</main>
	);
};

export default DashboardLayout;
