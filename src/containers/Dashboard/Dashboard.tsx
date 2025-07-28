import { Link } from "react-router";

import Table from "components/tables/Table";
import EmptyState from "components/misc/EmptyState";
import PageRoutes from "utils/pageRoutes";
import { useOrders } from "hooks/useOrder";

import * as styled from "./styles/dashboard";

const Dashboard = () => {
	const { data: orderData } = useOrders({});

	return (
		<styled.DashboardWrapper>
			<styled.DashboardHeader>Dashboard</styled.DashboardHeader>
			<styled.RecentOrderWrapper>
				<styled.RecentOrderHeader>
					<styled.RecentOrderText>Recent Orders</styled.RecentOrderText>
					{orderData?.total !== 0 && (
						<Link to={PageRoutes.orderHistory}>
							<styled.OrderMoreLink>See All</styled.OrderMoreLink>
						</Link>
					)}
				</styled.RecentOrderHeader>
				<styled.RecentOrderContainer>
					{orderData?.total === 0 ? (
						<EmptyState content="No Orders" />
					) : (
						<Table
							pageName="Dashboard"
							showSearch={false}
							tableData={orderData!.data}
						/>
					)}
				</styled.RecentOrderContainer>
			</styled.RecentOrderWrapper>
		</styled.DashboardWrapper>
	);
};

export default Dashboard;
