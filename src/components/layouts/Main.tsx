import { useRef } from "react";
import { Link, Outlet } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useCart } from "contexts/cartContext";
import * as common from "styles/ui";

import * as styled from "./styles/main";

const MainLayout = () => {
	const barRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const { showCart } = useCart();

	const handleShowMenu = () => {
		menuRef.current?.classList.toggle("show");
		barRef.current?.classList.toggle("toggle");
	};

	return (
		<styled.MainWrapper>
			<styled.MainHeader>
				<common.Container>
					<styled.MainNav>
						<Link to="/">
							<styled.Logo src="/images/venergie_logo.svg" alt="Logo" />
						</Link>
						<styled.MainNavLinksContainer ref={menuRef}>
							<styled.MainNavLinks>
								<styled.NavLink>
									<styled.StyledLink to="/">Home</styled.StyledLink>
								</styled.NavLink>
								<styled.NavLink>
									<styled.StyledLink to="/">Shop</styled.StyledLink>
								</styled.NavLink>
								<styled.NavLink>
									<styled.StyledLink to="/">Profile</styled.StyledLink>
								</styled.NavLink>
								<styled.NavLink>
									<styled.StyledLink to="/dashboard">
										Dashboard
									</styled.StyledLink>
								</styled.NavLink>
							</styled.MainNavLinks>
						</styled.MainNavLinksContainer>
						<styled.CartIconWrapper onClick={showCart}>
							<HiOutlineShoppingCart size={25} />
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
