import styled from "styled-components";
import { Colors } from "utils/colors";

export const UserLayoutWrapper = styled.div`
	position: relative;
	min-height: 100vh;
	display: flex;
	width: 100vw;
	overflow: hidden;
`;

export const SidebarWrapper = styled.aside`
	position: fixed;
	top: 0;
	width: 28.8rem;
	height: 100%;
	display: block;
	z-index: 30;
	background-color: ${Colors.veryDarkGray};
`;

export const MainWrapper = styled.main`
	flex: 1 1 0%;
	padding-bottom: 6.4rem;
`;

export const MainNav = styled.nav`
	display: block;
	position: sticky;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 7.2rem;
	padding: 0 2rem;

	/* @media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	} */
`;
