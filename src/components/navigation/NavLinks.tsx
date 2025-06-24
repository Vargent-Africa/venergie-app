import React from "react";
import { NavLink } from "react-router";

import * as styled from "./styles/navLinks";

const NavLinks = ({
	slug,
	children,
}: {
	slug: string;
	children: React.ReactNode;
}) => {
	return (
		<NavLink to={slug}>
			{({ isActive }) => (
				<styled.LinkWrapper $active={isActive}>{children}</styled.LinkWrapper>
			)}
		</NavLink>
	);
};

export default NavLinks;
