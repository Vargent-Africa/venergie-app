import styled from "styled-components";
import { Link } from "react-router";

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

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:hover {
		color: ${Colors.greenAquaBright};
	}
`;

export const CartIconWrapper = styled.div`
	cursor: pointer;
	position: relative;
`;

export const CartCounter = styled.span`
	color: ${Colors.white};
	padding: 0.5rem;
	border-radius: 50%;
	width: 2.2rem;
	height: 2.2rem;
	background-color: ${Colors.greenAquaBright};
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: -1rem;
	right: -1.4rem;
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

// .menu-wrap {
//   z-index: 1;

//   .toggler {
//     position: absolute;
//     top: 0;
//     right: 0;
//     z-index: 2;
//     cursor: pointer;
//     width: 60px;
//     height: 50px;
//     opacity: 0;

//     &:checked {
//       // Toggler Animation
//       & + .hamburger > div {
//         transform: rotate(135deg);
//         background: #fff;

//         // Turn lines into X;
//         &::before,
//         &::after {
//           top: 0;
//           transform: rotate(90deg);
//         }
//       }
//       //   Rotate on hover when checked

//       &:hover + .hamburger > div {
//         transform: rotate(225deg);
//       }
//       //   Show menu
//       & ~ .menu {
//         visibility: visible;
//         & > div {
//           transform: scale(1);
//           transition-delay: $menu-speed;
//           & > div {
//             opacity: 1;
//             transition: opacity 0.4s ease 0.4s;
//           }
//         }
//       }
//     }
//   }
//   .hamburger {
//     position: absolute;
//     top: 0;
//     right: 0;
//     z-index: 1;
//     width: 80px;
//     height: 60px;
//     padding: 1rem 2rem 1rem 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     //background-color: $overlay-color;

//     // Hamburger Line
//     div {
//       position: relative;
//       flex: none;
//       width: 100%;
//       height: 2px;
//       background: #000;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       transition: all 0.4s ease;

//       &::before,
//       &::after {
//         content: "";
//         position: absolute;
//         z-index: 1;
//         top: -10px;
//         width: 100%;
//         height: 2px;
//         background: inherit;
//       }
//       &::after {
//         top: 10px;
//       }
//     }
//   }

//   .menu {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     visibility: hidden;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     & > div {
//       background: rgba(36, 44, 66, 0.93);
//       border-radius: 50%;
//       width: 200vw;
//       height: 300vw;
//       display: flex;
//       flex: none;
//       align-items: center;
//       justify-content: center;
//       transform: scale(0);
//       transition: all 0.4s ease;

//       & > div {
//         text-align: center;
//         max-width: 90vw;
//         max-height: 100vh;
//         opacity: 0;
//         transition: opacity 0.4s ease;

//         & > ul > li {
//           list-style: none;
//           color: #fff;
//           font-size: 1.5rem;
//           padding: 1rem;

//           & > a {
//             color: inherit;
//             text-decoration: none;
//             transition: color 0.4s ease;

//             &:hover {
//               color: $main-color;
//             }
//           }
//         }
//       }
//     }
//   }
// }
