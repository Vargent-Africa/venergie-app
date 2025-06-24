import styled from "styled-components";

import { Colors } from "utils/colors";

export const LinkWrapper = styled.div<{ $active: boolean }>`
	padding: 2rem 5.6rem;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	background-color: ${({ $active }) =>
		$active ? Colors.jetGray : Colors.transparent};
	color: ${({ $active }) => ($active ? Colors.greenAquaBright : Colors.white)};
	cursor: pointer;
	text-decoration: none;
`;
