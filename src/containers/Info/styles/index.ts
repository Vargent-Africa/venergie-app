import styled from "styled-components";

import { Colors } from "utils/colors";

export const Wrapper = styled.section`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 50rem;
	background-color: ${Colors.white};
	padding: 5.6rem 2.4rem;
	border-radius: 6px;
	overflow: hidden;
`;

export const Icon = styled.svg`
	width: 9.6rem;
	height: 9.6rem;
	object-fit: cover;
`;

export const HeadText = styled.h4`
	font-size: 2rem;
	font-weight: 600;
	margin-top: 3.2rem;
	text-align: center;
`;

export const SubText = styled.p`
	text-align: center;
	overflow-wrap: break-word;
	margin-top: 1.5rem;
	max-width: 37.4rem;
`;
