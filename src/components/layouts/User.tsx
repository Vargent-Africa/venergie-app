import { useRef, useState } from "react";
import { Outlet, Link } from "react-router";

import NavLinks from "components/navigation/NavLinks";
import Avatar from "components/misc/Avatar/Avatar";

import * as styled from "./styles/user";

const DashboardLayoutPush = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);

	const [isOpen, setIsOpen] = useState(false);

	const handleShow = () => {
		menuRef.current?.classList.toggle("toggle");
		setIsOpen(!isOpen);
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
			<styled.SidebarWrapper isOpen={isOpen}>
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
				<styled.SidebarBottomWrapper>
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
							d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
						/>
						<styled.SidebarPath
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</styled.SidebarIcon>
					<styled.SidebarLinkText>Settings</styled.SidebarLinkText>
					<styled.SidebarBottomLinks>
						<styled.SidebarBottomLink>
							<Avatar firstName="Chris" lastName="Ceejay" />
							<styled.ProfileNameText>
								Christopher Chijioke
							</styled.ProfileNameText>
						</styled.SidebarBottomLink>
						<styled.SidebarBottomLink
							onClick={() => {}}
							className="flex items-center space-x-2 px-3 py-2 w-full"
						>
							<styled.SidebarIcon
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 text-text-color"
							>
								<styled.SidebarPath
									fillRule="evenodd"
									d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
									clipRule="evenodd"
								/>
								<styled.SidebarPath
									fillRule="evenodd"
									d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
									clipRule="evenodd"
								/>
							</styled.SidebarIcon>
							<styled.SidebarLinkText className="cursor-pointer text-xs text-text-color">
								Logout
							</styled.SidebarLinkText>
						</styled.SidebarBottomLink>
					</styled.SidebarBottomLinks>
				</styled.SidebarBottomWrapper>
			</styled.SidebarWrapper>
			<styled.MainWrapper isOpen={isOpen}>
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

export default DashboardLayoutPush;
