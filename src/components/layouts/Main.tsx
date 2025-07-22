import { useRef } from "react";
import { Link, Outlet } from "react-router";

import { useCart } from "contexts/cartContext";
import { useAuth } from "contexts/authContext";

import PageRoutes from "utils/pageRoutes";

import * as common from "styles/ui";

import * as styled from "./styles/main";

const MainLayout = () => {
	const barRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const { showCart } = useCart();
	const { authUser } = useAuth();

	const handleShowMenu = () => {
		menuRef.current?.classList.toggle("show");
		barRef.current?.classList.toggle("toggle");
	};

	const handleNavClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		// Close dropdown if a link was clicked
		if (target.closest("a")) {
			menuRef.current?.classList.remove("show");
			barRef.current?.classList.remove("toggle");
		}
	};

	// console.log("authUser", authUser);

	return (
		<styled.MainWrapper>
			<styled.MainHeader>
				<common.Container>
					<styled.MainNav>
						<Link to="/">
							<styled.Logo src="/images/venergie_logo.svg" alt="Logo" />
						</Link>
						<styled.MainNavLinksContainer ref={menuRef}>
							<styled.MainNavLinks onClick={handleNavClick}>
								<styled.NavLink>
									<Link to="/">
										<styled.StyledLink>Home</styled.StyledLink>
									</Link>
								</styled.NavLink>
								<styled.NavLink>
									<Link to="/">
										<styled.StyledLink>Shop</styled.StyledLink>
									</Link>
								</styled.NavLink>
								{authUser === null ? (
									<styled.NavLink>
										<Link to={PageRoutes.login}>
											<styled.StyledLink>Login</styled.StyledLink>
										</Link>
									</styled.NavLink>
								) : (
									<styled.NavLink>
										<Link to={PageRoutes.dashboard}>
											<styled.StyledLink>Dashboard</styled.StyledLink>
										</Link>
									</styled.NavLink>
								)}
							</styled.MainNavLinks>
						</styled.MainNavLinksContainer>
						<styled.CartIconWrapper onClick={showCart}>
							<styled.CartIcon
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<styled.CartIconPath
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</styled.CartIcon>
							<styled.CartCounter>3</styled.CartCounter>
						</styled.CartIconWrapper>
						<styled.MenuIconContainer ref={barRef} onClick={handleShowMenu}>
							<styled.MenuIcon />
						</styled.MenuIconContainer>
					</styled.MainNav>
				</common.Container>
			</styled.MainHeader>
			<styled.MainComponent>
				<Outlet />
			</styled.MainComponent>
			<styled.MainFooter>
				<styled.FooterText>
					Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
				</styled.FooterText>
			</styled.MainFooter>
		</styled.MainWrapper>
	);
};

export default MainLayout;
