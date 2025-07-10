import styled, { css } from "styled-components";

import { Colors } from "utils/colors";
import { Sizes } from "utils/screenSizes";

export const UserLayoutWrapper = styled.div`
	position: relative;
	min-height: 100vh;
	display: flex;
	width: 100vw;
	overflow: hidden;
`;

const styledScrollbarMixin = css`
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

	@media (max-width: ${Sizes.md}) {
		/* display: none; */
		position: absolute;
		/* top: 1.5rem; */
		left: -90% !important;
		width: 80% !important;
		transition: 0.5s;
		padding: 1rem;

		&.showbar {
			left: 0 !important;
		}
	}
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
	height: calc(100% - 3.8rem);
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
	/* justify-content: flex-end; */
	align-items: center;
	position: relative;
`;

export const MainIconWrapper = styled.div`
	position: absolute;
	top: 2rem;
	width: 2.5rem;
	height: 2rem;
	cursor: pointer;
	z-index: 1;
	background: transparent;
	display: none;

	&.toggle {
		left: calc(80% + 1rem);
		transition: left 0.5s linear 1s;
		span {
			background: transparent;
			&:before {
				top: 0;
				transform: rotate(45deg);
				//background: #ffffff;
			}
			&:after {
				top: 0;
				transform: rotate(-45deg);
				//background: #ffffff;
			}
		}
	}

	@media (max-width: ${Sizes.md}) {
		display: block;
	}
`;

export const MainIconSpan = styled.span`
	display: block;
	width: 2.5rem;
	height: 3px;
	background-color: #262626;
	position: absolute;
	top: 10px;
	transition: 0.5s;
	border-radius: 4px;

	&:before {
		content: "";
		position: absolute;
		top: -6px;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: #262626;
		transition: 0.5s;
		border-radius: 4px;
	}
	&:after {
		content: "";
		position: absolute;
		top: 6px;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: #262626;
		transition: 0.5s;
		border-radius: 4px;
	}
`;

export const MainSection = styled.section`
	padding: 4rem 4rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-left: 28.8rem;

	@media (max-width: ${Sizes.md}) {
		margin-left: 0;
		padding: 4rem 2rem;
	}
`;
