import styled from "styled-components";

import { Colors } from "utils/colors";

export const DashboardWrapper = styled.section``;

export const DashboardHeader = styled.h1`
	font-size: 2rem;
`;

export const RecentOrderWrapper = styled.section`
	margin-top: 4rem;
`;

export const RecentOrderHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const RecentOrderText = styled.h1`
	font-size: 1.6rem;
`;

export const RecentOrderContainer = styled.div`
	margin-top: 2rem;
	background-color: ${Colors.white};
	border-radius: 6px;
	overflow: hidden;
	padding: 0 4rem 4rem;
`;

export const OrderMoreLink = styled.span`
	color: ${Colors.forestGreen};
	font-size: 1.5rem;
`;
