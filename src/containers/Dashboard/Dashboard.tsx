import Table from "components/tables/Table";

import * as styled from "./styles/dashboard";

const Dashboard = () => {
	return (
		<styled.DashboardWrapper>
			<styled.DashboardHeader>Dashboard</styled.DashboardHeader>
			<Table />
		</styled.DashboardWrapper>
	);
};

export default Dashboard;
