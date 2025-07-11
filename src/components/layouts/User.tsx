import { useRef } from "react";
import { Outlet, Link } from "react-router";

import NavLinks from "components/navigation/NavLinks";

import * as styled from "./styles/user";

const DashboardLayout = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const sidebarRef = useRef<HTMLElement | null>(null);

	const handleShow = () => {
		sidebarRef.current?.classList.toggle("showbar");
		menuRef.current?.classList.toggle("toggle");
	};

	const handleNavClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		// Only close drawer if a link was clicked
		if (target.closest("a")) {
			handleShow();
		}
	};

	return (
		<styled.UserLayoutWrapper>
			<styled.SidebarWrapper ref={sidebarRef}>
				<Link to="/">
					<styled.SidebarLogoImg src="/images/venergie_logo.svg" alt="Logo" />
				</Link>
				<styled.SidebarLinks onClick={handleNavClick}>
					<styled.SidebarLink>
						<NavLinks slug="/dashboard">
							<styled.SidebarIcon
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<styled.SidebarPath
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
								/>
							</styled.SidebarIcon>
							<styled.SidebarLinkText>Dashboard</styled.SidebarLinkText>
						</NavLinks>
					</styled.SidebarLink>
					<styled.SidebarLink>
						<NavLinks slug="/order-history">
							<styled.SidebarIcon
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<styled.SidebarPath
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
								/>
							</styled.SidebarIcon>
							<styled.SidebarLinkText>Order History</styled.SidebarLinkText>
						</NavLinks>
					</styled.SidebarLink>
					<styled.SidebarLink>
						<NavLinks slug="/profile">
							<styled.SidebarIcon
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7 md:w-5 md:h-5"
							>
								<styled.SidebarPath
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</styled.SidebarIcon>
							<styled.SidebarLinkText>Profile</styled.SidebarLinkText>
						</NavLinks>
					</styled.SidebarLink>
				</styled.SidebarLinks>
			</styled.SidebarWrapper>
			<styled.MainWrapper>
				<styled.MainNav>
					<styled.MainNavContent>
						<styled.MainIconWrapper
							id="dash-bar"
							ref={menuRef}
							onClick={handleShow}
						>
							<styled.MainIconSpan />
						</styled.MainIconWrapper>
					</styled.MainNavContent>
				</styled.MainNav>
				<styled.MainSection>
					<Outlet />
				</styled.MainSection>
			</styled.MainWrapper>
		</styled.UserLayoutWrapper>
	);
};

export default DashboardLayout;
