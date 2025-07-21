import styled from "styled-components";

import { Colors } from "utils/colors";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3.2rem;
	height: 100vh;
`;

export const HeadText = styled.h4`
	font-size: 3.6rem;
	line-height: 4rem;
	font-weight: 700;
`;

export const Btn = styled.button`
	display: inline-block;
	padding: 0.8rem 1.6rem;
	border-radius: 6px;
	background-color: ${Colors.greenAquaBright};
	cursor: pointer;
	font-size: 1.5rem;
	font-weight: 500;
`;
