import styled, { css } from "styled-components";

import { Colors } from "utils/colors";
import { Sizes } from "utils/screenSizes";

export const UserLayoutWrapper = styled.div`
	display: flex;
	height: 100vh;
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

export const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
	width: 28.8rem;
	background-color: ${Colors.veryDarkGray};
	color: ${Colors.white};
	position: fixed;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? "0" : "-28.8rem")};
	height: 100vh;
	transition: left 0.3s ease;
	z-index: 1000;

	@media (min-width: 778px) {
		position: relative;
		left: 0;
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
	height: calc(100% - 17.8rem);
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

export const MainWrapper = styled.main<{ isOpen: boolean }>`
	flex: 1;
	margin-left: 0;
	padding-bottom: 6.4rem;
	transition: margin-left 0.3s ease;
	overflow: auto;
	scrollbar-width: none;

	@media (max-width: 777px) {
		margin-left: ${({ isOpen }) => (isOpen ? "28.8rem" : "0")};
		min-width: ${({ isOpen }) => (isOpen ? "50rem" : "0")};
	}
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
		transition: left 0.5s linear 1s;
		span {
			background: transparent;
			&:before {
				top: 0;
				transform: rotate(45deg);
			}
			&:after {
				top: 0;
				transform: rotate(-45deg);
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
	height: 100%;
	overflow: auto;

	@media (max-width: ${Sizes.md}) {
		margin-left: 0;
		padding: 4rem 2rem;
	}
`;

export const SidebarBottomWrapper = styled.div`
	width: 100%;
	color: white;
	padding: 2rem 5.6rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	position: relative;
	border-top: 1px solid ${Colors.lightCoolGray};

	&:hover ul {
		display: block;
	}
`;

export const SidebarBottomLinks = styled.ul`
	position: absolute;
	left: calc(100% + 1.5rem);
	bottom: 1.1rem;
	background-color: ${Colors.jetGray};
	border-radius: 5px;
	min-width: 20rem;
	min-height: 6rem;
	display: none;

	&::before {
		content: "";
		position: absolute;
		bottom: 2rem;
		left: -1.6rem;
		width: 0;
		height: 0;
		border-bottom: 1.1rem solid ${Colors.jetGray};
		border-left: 1.1rem solid transparent;
		border-right: 1.1rem solid transparent;
		border-radius: 0.3rem 0.3rem 0.15rem 0;
		transform: rotate(-90deg);
	}
`;

export const SidebarBottomLink = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.5rem;

	&:not(:last-child) {
		border-bottom: 1px solid ${Colors.lightCoolGray};
	}
`;

export const ProfileNameText = styled.span`
	font-size: 1.5rem;
	text-transform: capitalize;
	max-width: 14rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
