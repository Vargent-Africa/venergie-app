import { Link } from "react-router";

import Table from "components/tables/Table";
import { PageRoutes } from "utils/pageRoutes";

import * as styled from "./styles/dashboard";

const Dashboard = () => {
	return (
		<styled.DashboardWrapper>
			<styled.DashboardHeader>Dashboard</styled.DashboardHeader>
			<styled.RecentOrderWrapper>
				<styled.RecentOrderHeader>
					<styled.RecentOrderText>Recent Orders</styled.RecentOrderText>
					<Link to={PageRoutes.orderHistory}>
						<styled.OrderMoreLink>See All</styled.OrderMoreLink>
					</Link>
				</styled.RecentOrderHeader>
				<Table pageName="Dashboard" />
			</styled.RecentOrderWrapper>
		</styled.DashboardWrapper>
	);
};

export default Dashboard;
