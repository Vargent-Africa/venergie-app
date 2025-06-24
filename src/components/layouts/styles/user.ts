import styled, { css } from "styled-components";

import { Colors } from "utils/colors";

export const UserLayoutWrapper = styled.div`
	position: relative;
	min-height: 100vh;
	display: flex;
	width: 100vw;
	overflow: hidden;
`;

export const styledScrollbarMixin = css`
	scrollbar-width: 0.5rem;
	&::-webkit-scrollbar-track {
		background-color: ${Colors.veryDarkGray};
		border-radius: 0.2rem;
	}
	&::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.8rem;
		background-color: ${Colors.veryDarkGray};
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 0.2rem;
		background-color: ${Colors.lightCoolGray};
	}
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

export const SidebarLogoImg = styled.img`
	display: block;
	margin: 2.4rem auto;
	width: 16rem;
	height: 3.8rem;
	object-fit: contain;
	cursor: pointer;
`;

export const SidebarLinks = styled.ul`
	display: block;
	padding-bottom: 3.2rem;
	overflow-y: scroll;
	margin-top: 5.6rem;
	height: 85vh;
	${styledScrollbarMixin}
`;

export const SidebarLink = styled.li``;

export const SidebarIcon = styled.svg`
	width: 2rem;
	height: 2rem;
`;

export const SidebarPath = styled.path`
	opacity: 1;
`;

export const SidebarLinkText = styled.span`
	font-size: 1.6rem;
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
	background-color: ${Colors.white};
`;

export const MainNavContent = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const MainSection = styled.section`
	padding: 4rem 4rem 5.6rem;
	display: flex;
	flex-direction: column;
	min-height: 95vh;
	margin-left: 28.8rem;
`;
