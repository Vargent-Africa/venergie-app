import styled from "styled-components";

// import { Colors } from "utils/colors";

export const PaginationWrapper = styled.div`
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.3rem;
	justify-self: flex-end;
	margin-top: 1rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const PaginationList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
	font-weight: 400;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 4px;
	background-color: ${({ active }) => (active ? "#EBF2FC" : "white")};
`;
