import styled from "styled-components";

import { Colors } from "utils/colors";
import { Sizes } from "utils/screenSizes";

export const OrderWrapper = styled.section``;

export const OrderHeader = styled.h1`
	font-size: 2rem;
`;

export const OrderContainer = styled.div`
	margin-top: 4rem;
	background-color: ${Colors.white};
	border-radius: 6px;
	overflow: hidden;
	padding: 0 4rem 4rem;

	@media (max-width: ${Sizes.md}) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;
