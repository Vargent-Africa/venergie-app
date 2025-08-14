import { Link } from "react-router";
import { toast } from "react-toastify";

import Table from "components/tables/Table";
import EmptyState from "components/misc/EmptyState";
import Loader from "components/misc/Loader";
import PageRoutes from "utils/pageRoutes";
import { useOrders } from "hooks/useOrder";
import { usePaginationQuery } from "hooks/usePaginationQuery";

import * as styled from "./styles/dashboard";

const Dashboard = () => {
	const { query, page, limit } = usePaginationQuery({});
	const {
		isLoading,
		isError,
		error,
		data: orderData,
	} = useOrders({ page: +page, limit: +limit, query });

	if (isLoading) return <Loader />;
	if (isError) {
		return toast.error(error.message);
	}

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
