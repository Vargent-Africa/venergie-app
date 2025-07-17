import styled from "styled-components";

import { Colors } from "utils/colors";

export const Avatar = styled.div`
	width: 3.5rem;
	height: 3.5rem;
	overflow: hidden;
	border-radius: 9999px;
	background-color: ${Colors.greenAquaBright};
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 500;
	color: ${Colors.black};
`;
