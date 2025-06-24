import styled from "styled-components";

import { Colors } from "utils/colors";

export const MainWrapper = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

export const MainHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 40;
	width: 100%;
	background-color: ${Colors.white};
`;

export const MainNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem 0;
	background-color: ${Colors.white};
	width: 100%;
`;

export const Logo = styled.img`
	height: 4rem;
	width: 18rem;
	object-fit: contain;

	@media (min-width: 768px) {
		width: 26rem;
	}
`;

export const MainNavLinksContainer = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${Colors.white};

	&.show {
		display: block;
		z-index: 9999;
	}

	@media (min-width: 768px) {
		position: static;
		display: block;
	}
`;

export const MainNavLinks = styled.ul`
	display: block;
	margin: 2rem 0 4rem;

	@media (min-width: 768px) {
		display: flex;
		margin: 0;
	}
`;

export const NavLink = styled.li`
	padding: 1rem 2rem;
	font-weight: 500;

	@media (min-width: 768px) {
		padding: 0.25rem 2rem;
	}
`;

export const StyledLink = styled.span`
	text-decoration: none;

	&:hover {
		color: ${Colors.greenAquaBright};
	}
`;

export const CartIconWrapper = styled.div`
	cursor: pointer;
	position: relative;
`;

export const CartIcon = styled.svg`
	width: 2.8rem;
`;

export const CartIconPath = styled.path`
	opacity: 1;
`;

export const CartCounter = styled.span`
	color: ${Colors.black};
	padding: 0.5rem;
	border-radius: 50%;
	width: 2.2rem;
	height: 2.2rem;
	background-color: ${Colors.greenAquaBright};
	font-size: 1.3rem;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: -1rem;
	right: -1.3rem;
`;

export const MainComponent = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const MainFooter = styled.footer`
	background-color: ${Colors.black};
	padding: 3rem;
`;

export const FooterText = styled.footer`
	text-align: center;
	color: ${Colors.white};
`;

//menu icon
export const MenuIconContainer = styled.div`
	position: absolute;
	top: 2rem;
	right: 6rem;
	width: 2.5rem;
	height: 2rem;
	cursor: pointer;
	z-index: 9999;
	background: transparent;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const MenuIcon = styled.span`
	display: block;
	width: 2.2rem;
	height: 2.5px;
	background: #262626;
	position: absolute;
	top: 15px;
	transition: 0.5s;
	border-radius: 3px;

	${MenuIconContainer}.toggle & {
		background: transparent;
	}

	&:before {
		content: "";
		position: absolute;
		top: -6px;
		left: 0;
		width: 100%;
		height: 2.5px;
		background: #262626;
		transition: 0.5s;
		border-radius: 3px;

		${MenuIconContainer}.toggle & {
			top: 0;
			transform: rotate(45deg);
		}
	}

	&:after {
		content: "";
		position: absolute;
		top: 6px;
		left: 0;
		width: 100%;
		height: 2.5px;
		background: #262626;
		transition: 0.5s;
		border-radius: 3px;

		${MenuIconContainer}.toggle & {
			top: 0;
			transform: rotate(-45deg);
		}
	}
`;
