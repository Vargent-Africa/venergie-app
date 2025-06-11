import { Outlet } from "react-router";

import * as styled from "./styles/user";

const DashboardLayout = () => {
	return (
		<styled.UserLayoutWrapper>
			<styled.SidebarWrapper />
			<styled.MainWrapper>
				<styled.MainNav />
				<section>
					<Outlet />
				</section>
			</styled.MainWrapper>
		</styled.UserLayoutWrapper>
	);
};

export default DashboardLayout;
